class TagDict{
	constructor(){
		this.datastruct = {};
	}
	add(item){
		let data = this.datastruct
		if(!(item in data)){
			data[item] = 0;
		}
		data[item] +=1;
	}
	keys(){
		return Object.keys(this.datastruct).sort();
	}
	size(){
		return Object.keys(this.datastruct).length;
	}
	value(key){
		return this.datastruct[key];
	}
}
export default TagDict;