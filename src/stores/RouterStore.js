import myState from "../States";

const RouterStore = {
	PageChange: function(payload, state, target){
		target.myDispatcher.setURL(payload);
		target.setState(myState.PageState(payload));
	}
};
export default RouterStore;