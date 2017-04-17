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
			text: text.replace(new RegExp(string, 'g'), function(x){return '<span>'+x+'</span>'})
		};
	}
}
export default TextEntity;