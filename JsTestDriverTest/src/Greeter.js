/**
 * 
 */

myapp = {};

myapp.Greeter = function() { };

myapp.Greeter.prototype.greet = function(name) {
  return "Hello " + name + "!";
};

myapp.Greeter.prototype.validaHORUS = function(codigo) {
	
	if(codigo == null || codigo == "") return false;
	if(codigo.length != 7) return false;
	
	// El primer caracter ha de ser una letra
	var letras  = /[a-zA-Z]/;
	var primeraLetra = codigo.charAt(0);
	if(!letras.test(primeraLetra)) return false;
	
	for(var k = 1; k < codigo.length; k++){
		//alert(codigo + " : " + k + ":" + codigo[k] + ":" + isNaN(codigo[k]));
		if(isNaN(codigo[k])){
			return false;
		}
	}
	
	return true;
};
