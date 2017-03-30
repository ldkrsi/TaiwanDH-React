import AppStore from './stores/AppStore';
import RouterStore from './stores/RouterStore';
import FrequencyStore from './stores/FrequencyStore';

function getDispatcher(target){
	return new Dispatcher(target, [
		AppStore, 
		RouterStore,
		FrequencyStore,
	]);
}
export default getDispatcher;


class Dispatcher{
	constructor(component, stores){
		this.component = component;
		this.stores = stores;
	}
	dispatch(command){
		for(let store of this.stores){
			if(!(command.type in store)){
				continue;
			}
			store[command.type](command.payload, this.component.state, this.component);
		}
	}
}

