import Filter from './model/Filter';

const FilterStore = {
	AddFilter: function(payload, state, setState){
		state.query.filters.push(new Filter(true, 0, true, state.directoryMetadata.tags[0].keys()[0]));
		setState({query: state.query});
	},
	RemoveFilter: function(payload, state, setState){
		state.query.filters.splice(parseInt(payload), 1);
		setState({query: state.query});
	},
	FilterExcludeChange: function(payload, state, setState){
		state.query.filters[payload.index].setExclude(payload.value);
		setState({query: state.query});
	},
	FilterEqualChange: function(payload, state, setState){
		state.query.filters[payload.index].setEqual(payload.value);
		setState({query: state.query});
	},
	FilterValueChange: function(payload, state, setState){
		state.query.filters[payload.index].setValue(payload.value);
		setState({query: state.query});
	},
	FilterKeyChange: function(payload, state, setState){
		state.query.filters[payload.index].setKey(payload.value, state.directoryMetadata.tags[payload.value].keys()[0]);
		setState({query: state.query});
	}
};

export default FilterStore;

