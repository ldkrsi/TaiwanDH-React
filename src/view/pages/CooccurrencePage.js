import React from 'react';
import ExportComponent from '../components/export-component';
import FilterComponent from '../components/filter-component';

function CooccurrencePage(props){
	let state = props.state;
	let filter = <FilterComponent 
		filters={state.query.filters} 
		tags={state.directoryMetadata.tags}
		actions={props.actions}
	/>;
	return(<div>
		<InputArea {...props} />
		{filter}
		{state.result.sum > 0 ? 
			<p>兩者總共共現{state.result.sum}次</p>
		: ''}
		<ShowItems dataSet={state.result.dataSet} />
	</div>);
}
export default CooccurrencePage;

function ShowItems(props){
	return(<div className="cooccurrences-table">{props.dataSet.map(function(item){
		return(<div className="row">
			<h3>{item.filename}</h3>
			{item.contents.map(function(row){
				return(<p dangerouslySetInnerHTML={{__html: row}}></p>);
			})}
		</div>);
	})}</div>);
}

function InputArea(props){
	const onChange1 = (e) => {props.actions.CooccurrenceTyping({
		index: '1',
		value: e.target.value
	})};
	const onChange2 = (e) => {props.actions.CooccurrenceTyping({
		index: '2',
		value: e.target.value
	})};
	const onChangeRange = (e) => {props.actions.CooccurrenceChangeRange(e.target.value)};
	return(<div>
		<input 
			type="text" 
			placeholder="輸入詞彙一"
			onChange={onChange1}
			value={props.state.query.term1} 
		/>
		<input 
			type="text" 
			placeholder="輸入詞彙二"
			onChange={onChange2}
			value={props.state.query.term2} 
		/><br /><br />
		<p>範圍：{props.state.query.range}個字</p>
		<input type="range" min="2" max="56" 
			onChange={onChangeRange}
			value={props.state.query.range}
		/><br />
		<button
			onClick={props.actions.CooccurrenceSubmit}
		>確定</button>
	</div>);
}