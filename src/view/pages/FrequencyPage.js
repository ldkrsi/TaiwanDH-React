import React from 'react';
import {Bar} from 'react-chartjs-2';



function FrequencyPage(props){
	let state = props.state;
	if(state.query.done.size === 0){
		return(<div><InputArea {...props} /></div>);
	}
	let result = [];
	if(state.result.drawData.length > 0){
		result.push(<h2>分層統計</h2>);
		state.result.drawData.forEach(function(data, i){
			result.push(<ChartElement key={i} 
				deep={(i+1).toString()} 
				data={data} 
			/>);
		});
	}
	return(<div>
		<InputArea {...props} />
		<InputedArea {...props} />
		<ResultArea totals={state.result.totals} />
		{result.map(function(item){return item;})}
	</div>);
}

export default FrequencyPage;

function ResultArea(props){
	let obj = props.totals;
	let keys = Object.keys(obj);
	let dataset = keys.map(function(k){return obj[k];});
	let options = {
		legend: {display: false},
		scales: {yAxes: [{ticks: {beginAtZero:true}}]}
	};
	let data = {
		labels: keys,
		datasets: [{
			borderWidth: 1,
			borderColor: 'rgba(255,45,85,1)',
			backgroundColor: 'rgba(255,45,85,0.2)',
			hoverBorderColor: 'rgba(255,45,85,1)',
			hoverBackgroundColor: 'rgba(255,45,85,0.4)',
			label: "出現次數",
			data: dataset
		}]
	}
	return(<div className="chart-element">
		<h2>詞頻統計</h2>
		<Bar 
			data={data} 
			options={options}
		/>
	</div>);
}
function ChartElement(props){
	let name = "第"+props.deep+"層";
	return(<div className="chart-element">
		<h3>{name}</h3>
		<Bar
			data={props.data} 
			options={chart_options}
		/>
		<p><a 
			download={name+'.csv'}
			href={URL.createObjectURL(props.data.csv)}
		>下載圖表資料(csv)</a></p>
		<p>累計(長條圖) = 出現次數</p>
		<p>比率(折線圖) = 出現次數 / 該分類文章總數</p>
	</div>);

}
const chart_options = {
	scales: {
		yAxes: [
			{
				id: 'y-axis-1',
				position: 'left',
				gridLines: {
					display: false
				},
				ticks: {beginAtZero:true}
			},
			{
				id: 'y-axis-2',
				position: 'right',
				ticks: {beginAtZero:true}
			}
		]
	}
};
function InputedArea(props){
	const onClickRemove = (e) => {props.actions.FrequencyRemove(e.target.dataset.term)}
	return(<div><ul className="term-list-small">
		{Array.from(props.state.query.done).map(function(item,i){
			return(<li key={item}>
				{item}
				<span 
					className="remove-x" 
					data-term={item}
					onClick={onClickRemove}
				>&#10006;</span>
			</li>);
		})}
	</ul></div>);
}


function InputArea(props){
	const onChange = (e) => {props.actions.FrequencyTyping(e.target.value)}
	return(<div>
		<input 
			type="text" 
			placeholder="輸入詞彙"
			value={props.state.query.typing} 
			onChange={onChange}
		/>
		<button
			onClick={props.actions.FrequencySubmit}
		>Add</button>
	</div>);
}