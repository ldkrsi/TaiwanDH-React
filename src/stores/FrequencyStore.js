import MixinMethods from '../mixin/mixin';
import ColorSet from '../mixin/color-set';

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
		query.typing = '';
		query.done.add(term);
		let tag_set = state.directoryMetadata.tags;
		mergeResult(term, result, 
			occurrencesCounter(state.database, term, query.filters), 
			tag_set
		);
		result.drawData.forEach(function(item, i){
			item.csv = drawDataToCSV(item, tag_set[i]);
		});
		target.setState({
			query: query,
			result: result
		});
	},
	FiltersApply: function(payload, state, target){
		let query = state.query, result = state.result;
		if(query.done.size === 0){
			return;
		}
		result.drawData = [];
		for(let term of query.done){
			mergeResult(term, result, 
				occurrencesCounter(state.database, term, query.filters), 
				state.directoryMetadata.tags
			);
		}
		result.drawData.forEach(function(item, i){
			item.csv = drawDataToCSV(item, state.directoryMetadata.tags[i]);
		});
		target.setState({
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
		my_array.push([row.myID].concat(row.data));
	});
	my_array.push(['文章總計'].concat(chartData.labels.map(function(item){
		return tagData.value(item);
	})));
	return MixinMethods.getCsvBlob(my_array);
}
function mergeResult(term, result, count_result, tags){
	let drawData = result.drawData;
	count_result.result.forEach(function(row, i){
		let keys = Object.keys(row).sort();
		if(!(i in drawData)){
			drawData.push({
				labels: keys,
				datasets: [],
				csv: null,
				colorController: new ColorSet(false)
			});
		}
		let obj = drawData[i];
		pushChartDataRow(row, term, obj.datasets, {
			key_order: keys,
			colors: obj.colorController,
			tag_dict: tags[i]
		});
	});
	result.totals[term] = count_result.counter;
}
function occurrencesCounter(texts, string, filters){
	let result = [], counter = 0;
	for(let text of texts){
		let tags = text.metadata.tags;
		let pass = filters.every(function(f){
			return f.passFilter(tags[f.key]);
		});
		if(!pass){
			continue;
		}
		let c = text.occurrences(string);
		tags.forEach(function(tag, i){
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
function pushChartDataRow(source, string, target, args){
	let data1 = [], data2 = [];
	args.key_order.forEach(function(t){
		let v = source[t];
		data1.push(v);
		data2.push(Math.round(v/args.tag_dict.value(t)*100)/100);
	});
	let color = args.colors.getColor_array().map(function(x){
		return x.toString();
	}).join(',');
	target.push({
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
	});
	target.push({
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
	});
}