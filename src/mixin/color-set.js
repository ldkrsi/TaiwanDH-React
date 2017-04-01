class ColorSet{
	constructor(alpha=true){
		this.grey = 61;
		this.colors = [
			[this.grey, this.grey, this.grey], 
			[255,59,48], [90,200,250], [255,149,0], [0,122,255], 
			[255,204,0], [88,86,214], [76,217,100], [255,45,85]
		];
		this.alpha = null;
		if(alpha){
			this.alpha = 1.6;
		}
	}
	rotate(){
		let c = this.colors.shift();
		this.colors.push(c);
		if(this.alpha === null){
			return;
		}
		let circle = c.every((value) => {
			return (value === this.grey);
		});
		if(circle){
			this.alpha = this.alpha * 0.625;
		}
	}
	getColor_array(){
		this.rotate();
		if(this.alpha === null){
			return this.colors[0].slice();
		}
		return this.colors[0].slice().push(this.alpha);
	}
	getColor_rgba(){
		this.rotate();
		let c = this.colors[0].map(function(x){
			return x.toString();
		}).join(',');
		if(this.alpha === null){
			return 'rgba('+c+',1)';
		}
		return 'rgba('+c+','+this.alpha.toFixed(3)+')';
	}
}
export default ColorSet;