class MixinMethods{
	static getCsvBlob(my_array){
		var csvContent = "\uFEFF";
		my_array.forEach(function(infoArray, index){
			infoArray.forEach(function(a,i){
				csvContent+= "\"";
				csvContent+= a.replace(/\r/g, "").replace(/\n/g, "").replace(/"/g, "\"\"");
				csvContent+= i < infoArray.length ? "\"," : "\"";
			});
			if(index < my_array.length){
				csvContent +=  "\n";
			}
		});
		return new Blob([csvContent], {type: 'text/csv'});
	}
}

export default MixinMethods;