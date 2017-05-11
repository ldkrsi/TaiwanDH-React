const myState = {
	InitState: function(){
		return {
			url: 'state',
			database: [],
			directoryMetadata: {
				name: null,
				textCount: 0,
				deep: 0,
				tags: null
			},
			query: null,
			result: null
		}
	},
	PageState: function(url){
		return {
			url: url,
			query: selector(url, queryMap),
			result: selector(url, resultMap)
		};
	}
}
export default myState;
const queryMap = {
	frequency: function(){
		return {
			typing: '',
			done: new Set(),
			filters: []
		};
	},
	context: function(){
		return {
			typing: '',
			filters: []
		};	
	},
	cooccurrence: function(){
		return {
			term1: '',
			term2: '',
			range: 30,
			filters: []
		}
	}
};
const resultMap = {
	frequency: function(){
		return {
			totals: {},
			drawData: []
		};
	},
	context: function(){
		return {
			term: '',
			table: null,
			blob: null
		};
	},
	cooccurrence: function(){
		return {
			dataSet: [],
			sum: 0
		}
	}
};
function selector(url, dict){
	if(!(url in dict)){
		return null;
	}
	return dict[url]();
}
