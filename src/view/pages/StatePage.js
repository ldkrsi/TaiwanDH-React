import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import ColorSet from '../../mixin/color-set';
import ExportComponent from '../components/export-component';
import MixinMethods from '../../mixin/mixin';

function StatePage(props){
	let state = props.state;
	let tagsArray = state.directoryMetadata.tags;
	return(<div>
		<DirectoryMetadata 
			metadata={state.directoryMetadata} 
			count={state.database.length}
		/>
		{tagsArray.length > 0 ? <h2>分類數量</h2> : ''}
		{tagsArray.map(function(row, i){
			return(<DoughnutChart key={i} tags={row} idStr={(i+1).toString()} />);
		})}
	</div>);
}
export default StatePage;

function DoughnutChart(props){
	const tags = props.tags;
	const keys = tags.keys();
	const name = "第"+props.idStr+"層";
	let colors = new ColorSet();
	let my_colors = keys.map(() => {return colors.getColor_rgba();});
	let data = {
		labels: keys,
		datasets: [{
			data: keys.map((key) => {return tags.value(key);}),
			backgroundColor: my_colors,
			hoverBackgroundColor: my_colors
		}]
	};
	let options = {animation: {animateRotate: false}};
	let my_array = [['','數量']];
	Array.prototype.push.apply(my_array, tags.items());
	let blob_obj = MixinMethods.getCsvBlob(my_array);
	return(<div className="chart-element">
		<h3>{name}</h3>
		<Doughnut data={data} options={options}/>
		<ExportComponent 
			name={name+'分類統計.csv'}
			blobObject={blob_obj}
			text="匯出統計資料(csv)"
		/>
	</div>);
}
function DirectoryMetadata(props){
	const Reset = (e) => { 
		let f = confirm('確定要重設輸入資料？');
		if(f !== true){
			return;
		}
		location.reload(); 
	}
	return(<div className="block-element">
		<dl>
			<dt>資料夾名稱</dt>
			<dd>{props.metadata.name}</dd>
			<dt>資料夾深度</dt>
			<dd>{props.metadata.deep}層</dd>
			<dt>載入狀態</dt>
			<dd>已載入{props.count}個txt檔，共{props.metadata.textCount}個txt檔</dd>
		</dl>
		<button 
			className="warning"
			onClick={Reset}
		>Reset</button>
	</div>);
}