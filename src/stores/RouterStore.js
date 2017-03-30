import myState from "../States";

const RouterStore = {
	PageChange: function(payload, state, target){
		target.setState(myState.PageState(payload));
	}
};
export default RouterStore;