var getById = function(id){
	return document.getElementById(id);
}

var getByAttr = function(attr,name){
	var result = [],
    elems = document.getElementsByTagName( '*' );

	for( var i = 0, elem; elem = elems[i++]; ) {
	    if ( elem.getAttribute( attr, 2 ) == name ) {
	        result[ result.length ] = elem;
	    }
	}

	return result;

}


getById('variable-name-val').onkeyup = function (e) {
	this.value = this.value.replace(/^([0-9])|(\W){1}/,"");
}
