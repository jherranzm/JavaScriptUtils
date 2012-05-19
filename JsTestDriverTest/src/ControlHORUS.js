/**
 * 
 */


String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}

String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

myapp = {};

myapp.ControlHORUS = function() { };

myapp.ControlHORUS.prototype.greet = function(name) {
  return "Hello " + name + "!";
};

myapp.ControlHORUS.prototype.validaHORUS = function(codigo) {
	
	
	if(codigo == null || codigo == "") return false;
	codigo = codigo.trim();
	if(codigo.length != 7) return false;
	
	// El primer caracter ha de ser una letra
	var letras  = /[a-zA-Z]/;
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
