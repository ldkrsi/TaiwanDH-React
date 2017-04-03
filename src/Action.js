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
		},
		AddFilter: function(e){
			dispatcher.dispatch({
				type: 'AddFilter',
				payload: e
			});
		},
		RemoveFilter: function(i){
			dispatcher.dispatch({
				type: 'RemoveFilter',
				payload: i
			});	
		},
		FilterExcludeChange: function(p){
			dispatcher.dispatch({
				type: 'FilterExcludeChange',
				payload: p
			});
		},
		FilterEqualChange: function(p){
			dispatcher.dispatch({
				type: 'FilterEqualChange',
				payload: p
			});
		},
		FilterValueChange: function(p){
			dispatcher.dispatch({
				type: 'FilterValueChange',
				payload: p
			});
		},
		FilterKeyChange: function(p){
			dispatcher.dispatch({
				type: 'FilterKeyChange',
				payload: p
			});
		}
	};
}
export default getActions;