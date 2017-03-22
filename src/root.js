import '../css/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import myState from './States';
import AppView from './view/AppView';
import getDispatcher from './Dispatcher';
import getActions from './Action';


class AppContainer extends React.Component{
	constructor(props){
		super(props);
		this.myDispatcher = getDispatcher(this);
		this.action = getActions(this.myDispatcher);
		this.state = myState.InitState();
	}
	render() {
		return React.createElement(AppView,{
			actions: this.action,
			state: this.state
		});
	}
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));