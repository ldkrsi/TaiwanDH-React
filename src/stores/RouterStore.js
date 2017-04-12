import myState from "../States";

const RouterStore = {
	PageChange: function(payload, state, setState, target){
		target.myDispatcher.setURL(payload);
		setState(myState.PageState(payload));
	}
};
export default RouterStore;