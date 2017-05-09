import AppStore from './stores/AppStore';
import FilterStore from './stores/FilterStore';
import RouterStore from './stores/RouterStore';
import FrequencyStore from './stores/FrequencyStore';
import ContextStore from './stores/ContextStore';
import CooccurrenceStore from './stores/CooccurrenceStore';

function getDispatcher(target){
	return new Dispatcher(target, all_stores);
}
export default getDispatcher;
const all_stores = {
	global: [AppStore, RouterStore, FilterStore],
	pages: {
		frequency: [FrequencyStore],
		context: [ContextStore],
		cooccurrence: [CooccurrenceStore]
	}
};

class Dispatcher{
	constructor(component, stores){
		this.component = component;
		this.stores = stores;
		this.now_url = null;
		this.setState = (dict) => {
			this.component.setState(dict);
		};
	}
	setURL(url){
		this.now_url = url;
	}
	dispatch(command){
		this.stores.global.forEach((store) => {
			this.runCommand(store, command);
		});
		if(!(this.now_url in this.stores.pages)){
			return;
		}
		this.stores.pages[this.now_url].forEach((store) => {
			this.runCommand(store, command);
		});
	}
	runCommand(store, command){
		if(!(command.type in store)){
			return;
		}
		store[command.type](command.payload, this.component.state, this.setState, this.component);
	}
}

