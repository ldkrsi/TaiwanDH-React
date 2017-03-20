import myState from "../States";

function RouterStore(target, action){
	switch(action.type){
		case 'PageChange':
			target.setState(myState.PageState(action.payload));
			break;
		default:
			break;
	}
}
export default RouterStore;