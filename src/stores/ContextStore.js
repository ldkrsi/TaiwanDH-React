const ContextStore = {
	ContextTyping: function(payload, state, setState){
		let query = state.query;
		query.typing = payload;
		setState({query: query});
	},
	ContextSubmit: function(payload, state, setState){
		let query = state.query, result = state.result;
		let term = query.typing.trim();
		if(term.length === 0){
			return;
		}
		result.term = term;
		result.table = getContents(term, state.database);
		setState({result: result});
	}
};
export default ContextStore;
function getContents(string, database){
	let result = [];
	database.forEach(function(text){
		let tmp = text.tagging(string);
		if(tmp === null){
			return;
		}
		result.push([text.metadata.relativePath, tmp]);
	});
	return result;
}