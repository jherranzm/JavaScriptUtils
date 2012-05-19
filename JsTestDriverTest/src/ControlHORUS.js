/**
 * 
 */


String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
};

String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
};

String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
};

myapp = {};

myapp.ControlHORUS = function() { };


myapp.ControlHORUS.prototype.validaHORUS = function(codigo) {
	
	var LONGITUD = 7;
	var letras  = /[a-zA-Z]/;
	
	if(codigo == null || codigo == "") return false;
	codigo = codigo.trim();
	if(codigo.length != LONGITUD) return false;
	
	// El primer caracter ha de ser una letra
	var primeraLetra = codigo.charAt(0);
	if(!letras.test(primeraLetra)) return false;
	
	for(var k = 1; k < codigo.length; k++){
		//alert(codigo + " : " + k + ":" + codigo[k] + ":" + isNaN(codigo[k]));
		if(codigo[k] == " ") return false;
		if(isNaN(codigo[k])){
			return false;
		}
	}
	
	return true;
};


myapp.ControlHORUS.prototype.validaCP = function(codigoPostal) {
	
	var LONGITUD = 5;
	
	if(codigoPostal == null || codigoPostal == "") return false;
	codigoPostal = codigoPostal.trim();
	if(codigoPostal.length != LONGITUD) return false;
	
	// Han de ser 5 dígitos
	for(var k = 0; k < codigoPostal.length; k++){
		if(codigoPostal[k] == " ") return false;
		if(isNaN(codigoPostal[k])){
			return false;
		}
	}
	
	return true;
};
