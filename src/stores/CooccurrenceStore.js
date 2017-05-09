const CooccurrenceStore = {
	CooccurrenceTyping: function(payload, state, setState){
		let query = state.query;
		if(payload.index === '1'){
			query.term1 = payload.value;
		}
		else{
			query.term2 = payload.value;
		}
		setState({query: query});
	}
};
export default CooccurrenceStore;