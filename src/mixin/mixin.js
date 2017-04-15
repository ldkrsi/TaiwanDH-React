class MixinMethods{
	static getCsvBlob(my_array){
		var csvContent = "\uFEFF";
		my_array.forEach(function(infoArray, index){
			infoArray.forEach(function(a,i){
				if(typeof a !== 'string'){
					a = a.toString();
				}
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
	static escapeHtml(unsafe) {
		return unsafe
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}
}

export default MixinMethods;