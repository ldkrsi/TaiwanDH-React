function getActions(dispatcher){
	return {
		InputDirChange: function(e){
			dispatcher.dispatch({
				type: 'InputDirChange',
				payload: e
			});
		},
		PageChange: function(url){
			dispatcher.dispatch({
				type: 'PageChange',
				payload: url
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