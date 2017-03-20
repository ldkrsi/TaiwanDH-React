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
			query: queryDispatcher(url),
			result: resultDispatcher(url)
		};
	}
}
export default myState;

function queryDispatcher(url){
	switch(url){
		case 'frequency':
			return {
				typing: '',
				done: new Set()
			};
		default:
			return null;
	};
}
function resultDispatcher(url){
	switch(url){
		case 'frequency':
			return {
				totals: {},
				csvBlob: null,
				drawData: []
			};
		default:
			return null;
	};
}