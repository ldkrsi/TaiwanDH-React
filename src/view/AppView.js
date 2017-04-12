import React from 'react';
import Menu from './MenuView';

function AppView(props) {
	return(<div>
		{props.state.database.length === 0 ? <DirectoryInput actions={props.actions} /> : ''}
		<Menu {...props} />
		{props.state.database.length === 0 ? '' : <MainArea {...props} />}
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
