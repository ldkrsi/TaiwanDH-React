import React from 'react';

function AppView(props) {
	if(props.state.database.length === 0){
		return(<div>
			<DirectoryInput actions={props.actions} />
			<nav><Menu {...props} /></nav>
		</div>);
	}
	return(<div>
		<nav><Menu {...props} /></nav>
		<MainArea {...props} />
	</div>);
}
export default AppView;

import StatePage from './pages/StatePage';
import FrequencyPage from './pages/FrequencyPage';

function MainArea(props){
	switch(props.state.url){
		case 'state':
			return (<StatePage {...props} />);
		case 'frequency':
			return (<FrequencyPage {...props} />);
		default:
			return (<div>error</div>);
	}
}
function Menu(props){
	const onClick = (e) => {props.actions.PageChange(e.target.dataset.url)};
	const items = [
		{text: "狀態", url: "state"},
		{text: "詞頻分析", url: "frequency"},
	];
	if(props.state.database.length === 0){
		return(<ul className="disable">{items.map(function(item, i){
			return <li key={i}>{item.text}</li>;
		})}</ul>);
	}
	return(<ul className="enable">{items.map(function(item, i){
		return <li key={i}
			className={item.url === props.state.url ? 'active':''}
			onClick={item.url === props.state.url ? '' : onClick}
			data-url={item.url}
		>{item.text}</li>;
	})}</ul>);
}

function DirectoryInput(props){
	return(<div className="directory-input">
		<label
			htmlFor="directory-input"
		>選擇文本所在資料夾</label>
		<input type="file"
			id="directory-input"
			ref={(d) => {
				if(d){
					d.webkitdirectory = true;
				}
			}}
			onChange={props.actions.InputDirChange}
		/>
	</div>);
}
