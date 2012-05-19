/**
 * 
 */

GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new myapp.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
};

GreeterTest.prototype.testHORUSNulo = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS(null));
};

GreeterTest.prototype.testHORUSVacio = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS(""));
};

GreeterTest.prototype.testHORUSNumerico = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("1234567"));
};

GreeterTest.prototype.testHORUSLongitudErronea = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("123456"));
};


GreeterTest.prototype.testHORUSLongitud5Caracteres = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("12345"));
};

GreeterTest.prototype.testHORUSLongitud4Caracteres = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("1234"));
};

GreeterTest.prototype.testHORUSCorrectoMin = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(true, greeter.validaHORUS("a234567"));
};

GreeterTest.prototype.testHORUSCorrectoMay = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(true, greeter.validaHORUS("Z234567"));
};

GreeterTest.prototype.testHORUSTodoLetras = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("Zabcdef"));
};

GreeterTest.prototype.testHORUSCaracter = function() {
	  var greeter = new myapp.Greeter();
	  assertEquals(false, greeter.validaHORUS("_234567"));
};