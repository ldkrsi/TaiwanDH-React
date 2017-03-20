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
}
export default TextEntity;