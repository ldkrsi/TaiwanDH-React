import React from 'react';

function RemoveComponent(props){
	const onClickFunction = (e) => {
		props.action(e.target.dataset.value);
	}
	return(<span className="remove-x"
		data-value={props.myValue}
		onClick={onClickFunction}
	>&#10006;</span>);
}

export default RemoveComponent;