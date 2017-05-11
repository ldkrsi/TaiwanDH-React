import MixinMethods from '../../mixin/mixin';
class TextEntity{
	constructor(file_meta, text){
		this.metadata = {
			name: file_meta.name,
			lastModifiedDate: file_meta.lastModifiedDate,
			relativePath: file_meta.webkitRelativePath,
			tags: file_meta.webkitRelativePath.split("/").slice(1,-1)
		}
		this.text = text.trim();
	}
	occurrences(string){
		return (this.text.match(new RegExp(string, "g")) || []).length;
	}
	tagging(string){
		let f = this.occurrences(string);
		if(f === 0){
			return null;
		}
		let text = MixinMethods.escapeHtml(this.text);
		string = MixinMethods.escapeHtml(string);
		return {
			counter: f,
			text: text.replace(new RegExp(string, 'g'), function(x){return '<em>'+x+'</em>'})
		};
	}
	cooccurrences(term1, term2, window_args){
		let index_1 = this.text.indexOf(term1, 0);
		let index_2 = this.text.indexOf(term2, 0);
		let array = [];
		while(index_1 !== -1){
			array.push(index_1);
			index_1 = this.text.indexOf(term1, index_1+1);
		}
		let iter = 0, indexes = [];
		let window_size_diff_2 = window_args['window_size_diff_2'];
		let window_size_diff_1 = window_args['window_size_diff_1'];
		while(index_2 !== -1 && iter < array.length){
			if(index_2 > array[iter]){
				if(window_size_diff_2 >= index_2 - array[iter]){
					indexes.push(parseInt((index_2 + term2.length + array[iter])/2));
				}
				++iter;
			}
			else{
				if(window_size_diff_1 >= array[iter] - index_2){
					indexes.push(parseInt((index_2 + term1.length + array[iter])/2));
				}
				index_2 = this.text.indexOf(term2, index_2+1);
			}
		}
		return indexes.map((index) => {
			let target = this.text.substring(index-28, index+28);
			target = MixinMethods.escapeHtml(target);
			target = target.replace(new RegExp(term1, 'g'), function(x){return '<em>'+x+'</em>'});
			target = target.replace(new RegExp(term2, 'g'), function(x){return '<em>'+x+'</em>'});
			return target;
		});
	}
}
export default TextEntity;