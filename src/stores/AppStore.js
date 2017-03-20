import TextEntity from './model/TextEntity';
import TagDict from './model/TagDict';


function AppStore(target, action){
	switch(action.type){
		case 'InputDirChange':
			target.setState({database: []});
			let files = action.payload.target.files;
			let counter = 0, deep = 0, tags = [];
			for(let f of files){
				if(f.type !== 'text/plain'){
					continue;
				}
				read_file(f, target);
				counter +=1;
				deep = Math.max(deep, f.webkitRelativePath.split("/").length - 2);
				f.webkitRelativePath.split("/").slice(1,-1).map(function(item, i){
					if(tags.length <= i){
						tags.push(new TagDict());
					}
					tags[i].add(item);
				});
			}
			target.setState({
				directoryMetadata: {
					name: files[0].webkitRelativePath.split("/")[0],
					textCount: counter,
					deep: deep,
					tags: tags
				}
			});
			break;
		default:
			break;
	};
}
export default AppStore;

function read_file(file, target){
	let reader = new FileReader();
	reader.onload = (evt) =>{
		let text = new TextEntity(file, evt.target.result);
		target.setState({database: target.state.database.concat([text])});
	};
	reader.readAsText(file);
}

