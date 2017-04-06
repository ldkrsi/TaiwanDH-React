class Filter{
	constructor(_exclude, _key, _equal, _value){
		this.exclude = _exclude;
		this.key = _key;
		this.equal = _equal;
		this.value = _value;
	}
	is_exclude(){
		if(this.exclude){
			return '1';
		}
		return '0';
	}
	is_equal(){
		if(this.equal){
			return '1';
		}
		return '0';
	}
	setExclude(v){
		this.exclude = (v === '1');
	}
	setEqual(v){
		this.equal = (v === '1');
	}
	setValue(v){
		this.value = v;
	}
	setKey(k,v){
		this.key = k;
		this.value = v;
	}
	passFilter(value){
		return this.exclude ^ (!(this.equal ^ (value === this.value)));
	}
}
export default Filter;