import MixinMethods from '../mixin.js';
const FrequencyStore = {
	FrequencyTyping: function(payload, state, target){
		let query = state.query;
		query.typing = payload;
		target.setState({query: query});
	},
	FrequencyRemove: function(payload, state, target){
		let query = state.query;
		let result = state.result;
		query.done.delete(payload);
		delete result.totals[payload];
		for(let item of result.drawData){
			item.datasets = item.datasets.filter(function(row, i){
				if(row.myID !== payload){
					return true;
				}
				return false;
			});
		}
		result.drawData.forEach(function(item, i){
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		target.setState({
			query: query,
			result: result
		});
	},
	FrequencySubmit: function(payload, state, target){
		let query = state.query, result = state.result;
		let term = query.typing.trim();
		if(term.length === 0){
			return;
		}
		let drawData = result.drawData;
		let count_result = occurrencesCounter(state.database, term);
		query.typing = '';
		query.done.add(term);
		result.totals[term] = count_result.counter;
		count_result.result.forEach(function(row, i){
			let tags = state.directoryMetadata.tags[i];
			if(!(i in drawData)){
				drawData.push({
					labels: tags.keys(),
					csv: null,
					datasets: []
				});
			}
			Array.prototype.push.apply(drawData[i].datasets, getChartDataRow(row, tags, term));
		});
		drawData.forEach(function(item, i){
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		target.setState({
			query: query,
			result: result
		});
	}
};

export default FrequencyStore;
function drawDataToCSV(chartData, tagData){
	let my_array = [[''].concat(chartData.labels)];
	chartData.datasets.forEach(function(row){
		if(row.type !== 'bar'){
			return;
		}
		my_array.push([row.myID].concat(row.data.map(function(num){
			return num.toString();
		})));
	});
	my_array.push(['文章總計'].concat(chartData.labels.map(function(item){
		return tagData.value(item).toString();
	})));
	return MixinMethods.getCsvBlob(my_array);
}
function occurrencesCounter(texts, string){
	let result = [], counter = 0;
	for(let text of texts){
		let c = text.occurrences(string);
		text.metadata.tags.forEach(function(tag, i){
			if(!(i in result)){
				result.push({});
			}
			if(!(tag in result[i])){
				result[i][tag] = 0;
			}
			result[i][tag] += c;
		});
		counter += c;
	}
	return {
		counter: counter,
		result: result
	};
}
let colors = [
	[255,59,48], [90,200,250], [255,149,0], [0,122,255], 
	[255,204,0], [88,86,214], [76,217,100], [255,45,85],
	[0,0,0], [158,158,158]
];
function getChartDataRow(source, tags, string){
	let data1 = tags.keys().map(function(t){
		return source[t];
	});
	let data2 = tags.keys().map(function(t){
		return Math.round(source[t]/tags.value(t)*100)/100;
	});
	let color = colors[0].map(function(x){
		return x.toString();
	}).join(',');
	colors.push(colors.shift());
	return [
		{
			type: 'bar',
			yAxisID: 'y-axis-1',
			borderWidth: 1,
			borderColor: 'rgba('+color+',1)',
			backgroundColor: 'rgba('+color+',0.2)',
			hoverBorderColor: 'rgba('+color+',1)',
			hoverBackgroundColor: 'rgba('+color+',0.4)',
			myID: string,
			label: string + " (累計)",
			data: data1
		},
		{
			type: 'line',
			yAxisID: 'y-axis-2',
			fill: false,
			lineTension: 0,
			borderWidth: 1,
			pointBorderWidth: 1,
			pointHoverBorderWidth: 2,
			pointRadius: 2,
			pointHoverRadius: 4,
			backgroundColor: 'rgba('+color+',0.4)',
			borderColor: 'rgba('+color+',1)',
			pointBorderColor: 'rgba('+color+',1)',
			hoverBorderColor: 'rgba('+color+',1)',
			pointHoverBackgroundColor: 'rgba('+color+',1)',
			pointHoverBorderColor: 'rgba('+color+',1)',
			myID: string,
			label: string + " (比率)",
			data: data2
		}
	];
}