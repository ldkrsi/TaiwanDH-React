import React from 'react';

const routeTable = [
	{text: "狀態", url: "state"},
	{text: "詞頻分析", url: "frequency"},
]; 

function Menu(props){
	const onClick = (e) => {props.actions.PageChange(e.target.dataset.url)};
	if(props.state.database.length === 0){
		return(<nav><ul className="disable">{routeTable.map(function(item, i){
			return <li key={i}>{item.text}</li>;
		})}</ul></nav>);
	}
	return(<nav><ul className="enable">{routeTable.map(function(item, i){
		return <li key={i}
			className={item.url === props.state.url ? 'active':''}
			onClick={item.url === props.state.url ? '' : onClick}
			data-url={item.url}
		>{item.text}</li>;
	})}</ul></nav>);
}
export default Menu;