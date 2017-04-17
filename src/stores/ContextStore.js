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
	},
	ShiftToSpan: function(payload, state, setState){
		let result = state.result;
		let row = result.table[payload.index];
		row[2] = (row[2] + payload.value + row[3]) % row[3];
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
		result.push([text.metadata.relativePath, tmp.text, 0, tmp.counter]);
	});
	return result;
}