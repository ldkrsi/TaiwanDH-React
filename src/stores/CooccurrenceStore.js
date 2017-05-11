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
	CooccurrenceChangeRange: function(payload, state, setState){
		let query = state.query;
		query.range = payload;
		setState({query: query});
	},
	CooccurrenceSubmit: function(payload, state, setState){
		let query = state.query, result = state.result;
		let term1 = query.term1.trim(), term2 = query.term2.trim();
		if(term1.length === 0 || term2.length === 0 || term1 === term2){
			return;
		}
		let tmp = get_content(state.database, term1, term2, query.range);
		result.dataSet = tmp.result;
		result.sum = tmp.sum;
		setState({result: result});
	}
};
export default CooccurrenceStore;

function get_content(database, term1, term2, window_size){
	let window_args = [window_size - term1.length, window_size - term2.length];
	let counter = 0, result = [];
	database.forEach(function(text, i){
		let ans = text.cooccurrences(term1, term2, {
			window_size_diff_1: window_args[0],
			window_size_diff_2: window_args[1]
		});
		if(ans.length === 0){
			return;
		}
		counter += ans.length;
		result.push({
			filename: text.metadata.relativePath,
			contents: ans
		});
	});
	return {
		sum: counter,
		result: result
	};
}