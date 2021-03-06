define([
    'intern!object',
    'intern/chai!assert',
    'app/hello'
], function (registerSuite, assert, hello) {
	 registerSuite({
        name: 'hello',
        greet: function () {
        	assert.isDefined(hello,'hello is defined');
        	assert.isDefined(hello.greet,'hello.greet is defined');
            assert.isTrue(typeof hello.greet==='function', 'hello.greet should ');
            assert.strictEqual(hello.greet('Murray'), 'Hello, Murray!',
                'hello.greet should return a greeting for the person named in the first argument');
            assert.strictEqual(hello.greet(), 'Hello, world!',
                'hello.greet with no arguments should return a greeting to "world"');
        }
    });
});