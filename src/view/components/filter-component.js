import React from 'react';
import RemoveComponent from './remove-component';

function FilterComponent(props){
	const filters = props.filters;
	return(<div className="filter-component">
		<h3>篩選器</h3>
		{filters.map((item, i) => {
			return(<FilterItem 
				key={i}
				myIndex={i}
				filter={item}
				tags={props.tags}
				actions={props.actions}
			/>);
		})}
		<div className="button-group">
			<button className="small"
				onClick={props.actions.AddFilter}
			>{filters.length > 0 ? '+' : '新增'}</button>
			{filters.length > 0 ? <button>Apply</button> : ''}
		</div>
	</div>);
}
export default FilterComponent;

function FilterItem(props){
	const filter = props.filter;
	const tags = props.tags;
	const onRemoveClick = (index) => {
		props.actions.RemoveFilter(parseInt(index));
	}
	const onExcludeChange = (e) => {
		props.actions.FilterExcludeChange({index: props.myIndex, value: e.target.value});
	}
	const onEqualChange = (e) => {
		props.actions.FilterEqualChange({index: props.myIndex, value: e.target.value});
	}
	const onValueChange = (e) => {
		props.actions.FilterValueChange({index: props.myIndex, value: e.target.value});
	}
	const onKeyChange = (e) => {
		props.actions.FilterKeyChange({index: props.myIndex, value: parseInt(e.target.value)});
	}
	return(<div className="filter-li">
		<select value={filter.is_exclude()} onChange={onExcludeChange}>
			<option value="1">排除</option>
			<option value="0">包含</option>
		</select>
		<select value={filter.key.toString()} onChange={onKeyChange}>{tags.map(function(row, i){
			return(<option key={i} value={i.toString()}>{'第'+(i+1).toString()+'層'}</option>);
		})}</select>
		<select value={filter.is_equal()} onChange={onEqualChange}>
			<option value="1">等於</option>
			<option value="0">不等於</option>
		</select>
		<select value={filter.value} onChange={onValueChange}>{tags[filter.key].keys().map(function(k, i){
			return(<option key={i} value={k}>{k}</option>);
		})}</select>
		<RemoveComponent myValue={props.myIndex} action={onRemoveClick}/>
	</div>);
}




