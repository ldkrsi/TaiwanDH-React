function getActions(dispatcher){
	return {
		PageChange: function(url){
			dispatcher.dispatch({
				type: 'PageChange',
				payload: url
			});
		},
		InputDirChange: function(e){
			dispatcher.dispatch({
				type: 'InputDirChange',
				payload: e
			});
		},
		FrequencyTyping: function(query){
			dispatcher.dispatch({
				type: 'FrequencyTyping',
				payload: query
			});
		},
		FrequencySubmit: function(e){
			dispatcher.dispatch({
				type: 'FrequencySubmit',
				payload: e
			});
		},
		FrequencyRemove: function(term){
			dispatcher.dispatch({
				type: 'FrequencyRemove',
				payload: term
			});
		}
	};
}
export default getActions;