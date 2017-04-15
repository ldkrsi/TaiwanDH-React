const my_events = [
	'PageChange', 'InputDirChange',
	'AddFilter', 'RemoveFilter', 'FilterExcludeChange', 'FilterEqualChange', 'FilterValueChange', 'FilterKeyChange', 'FiltersApply',
	'FrequencyTyping', 'FrequencySubmit', 'FrequencyRemove',
	'ContextTyping','ContextSubmit'
];

function getActions(dispatcher){
	let obj = new Object();
	my_events.forEach((item) => {
		obj[item] = (p) => {
			dispatcher.dispatch({
				type: item,
				payload: p
			});
		};
	});
	return obj;
}
export default getActions;