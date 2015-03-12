
var ModulusCombine = require('../src/modulus-combine');


describe('modulus combine', function () {

	it ('can calculate precision from digits with number', function() {
		var modulusCombine = new ModulusCombine(2, 3);
		expect(modulusCombine._precision).to.equal(1000);
		expect(modulusCombine._maxy).to.equal(100000);
	});

	it ('can calculate precision with undefined digits', function() {
		var modulusCombine = new ModulusCombine(1);
		expect(modulusCombine._precision).to.equal(1);
		expect(modulusCombine._maxy).to.equal(10);
	});

	it ('can handle integer values', function(){
		var modulusCombine = new ModulusCombine(2);
		var z;
		var e;
		this.timeout(10000); // this can take some time
		for (var i = 0; i <= 99; i += 1) {
			for (var j = 0; j <= 99; j += 1) {
				z = modulusCombine.compress(i, j);
				e = modulusCombine.deflate(z);
				expect(e[0]).to.be.equal(i);
				expect(e[1]).to.be.equal(j);
			}
		}
	});

	it ('can handle real values', function(){
		var modulusCombine = new ModulusCombine(1, 4);
		var z;
		var e;
		this.timeout(10000); // this can take some time
		for (var i = 0; i <= 9; i += 0.1) {
			for (var j = 0; j <= 9; j += 0.1) {
				z = modulusCombine.compress(i, j);
				e = modulusCombine.deflate(z);
				expect(e[0]).to.be.closeTo(i, 0.001);
				expect(e[1]).to.be.closeTo(j, 0.001);
			}
		}
	});
});
