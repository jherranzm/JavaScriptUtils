/**
 * 
 */

ControlHORUSTest = TestCase("ControlHORUSTest");


ControlHORUSTest.prototype.testHORUSNulo = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS(null));
};

ControlHORUSTest.prototype.testHORUSVacio = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS(""));
};

ControlHORUSTest.prototype.testHORUSNumerico = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("1234567"));
};

ControlHORUSTest.prototype.testHORUSLongitudErronea = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("123456"));
};


ControlHORUSTest.prototype.testHORUSLongitud5Caracteres = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("12345"));
};

ControlHORUSTest.prototype.testHORUSLongitud4Caracteres = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("1234"));
};

ControlHORUSTest.prototype.testHORUSLongitud7PeroConEspaciosAlInicio = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("   1234"));
};

ControlHORUSTest.prototype.testHORUSLongitud7PeroConEspaciosAlFinal = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("Z12345 "));
};

ControlHORUSTest.prototype.testHORUSCorrectoMin = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(true, horusApp.validaHORUS("a234567"));
};

ControlHORUSTest.prototype.testHORUSCorrectoMay = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(true, horusApp.validaHORUS("Z234567"));
};

ControlHORUSTest.prototype.testHORUSIncorrectoLetraEnMedio = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("Z23a567"));
};

ControlHORUSTest.prototype.testHORUSIncorrectoEspacioEnMedio = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("Z2 4567"));
	  
};

ControlHORUSTest.prototype.testHORUSTodoLetras = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("Zabcdef"));
};

ControlHORUSTest.prototype.testHORUSCaracter = function() {
	  var horusApp = new myapp.ControlHORUS();
	  assertEquals(false, horusApp.validaHORUS("_234567"));
};