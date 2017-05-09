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
	cooccurrences(term1, term2, window_size){
		let index_1 = this.text.indexOf(term1, 0);
		let index_2 = this.text.indexOf(term2, 0);
		let array = [];
		while(index_1 !== -1){
			array.push(index_1);
			index_1 = this.text.indexOf(term1, index_1+1);
		}
		let iter = 0, indexes = [];
		let window_size_diff_2 = window_size - term2.length;
		let window_size_diff_1 = window_size - term1.length;
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
		let helf_window_size = parseInt(window_size/2);
		return indexes.map((index) => {
			return this.text.substring(index-helf_window_size, index+helf_window_size);
		});
	}
}
export default TextEntity;