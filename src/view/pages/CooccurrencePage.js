import React from 'react';
import ExportComponent from '../components/export-component';
import FilterComponent from '../components/filter-component';

function CooccurrencePage(props){
	return(<div>
		<InputArea {...props} />
		<div>
			{props.state.result.rows.map(function(row){
				return(<p>{row}</p>);
			})}
		</div>
	</div>);
}
export default CooccurrencePage;

function InputArea(props){
	const onChange1 = (e) => {props.actions.CooccurrenceTyping({
		index: '1',
		value: e.target.value
	})};
	const onChange2 = (e) => {props.actions.CooccurrenceTyping({
		index: '2',
		value: e.target.value
	})};
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
		/>
		<button
			onClick={props.actions.CooccurrenceSubmit}
		>確定</button>
	</div>);
}