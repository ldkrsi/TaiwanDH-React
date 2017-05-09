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
	},
	CooccurrenceSubmit: function(payload, state, setState){
		let query = state.query;
		let result = state.result;
		result.rows = [];
		state.database.forEach(function(text, i){
			Array.prototype.push.apply(result.rows, text.cooccurrences(query.term1, query.term2, 56));
		});
		setState({result: result});
	}
};
export default CooccurrenceStore;