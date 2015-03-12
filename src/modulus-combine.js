
var ModulusCombine = function(yDigits, fractionalDigits) {
	this._precision = Math.pow(10, fractionalDigits || 0);
	this._maxy = Math.pow(10, yDigits) * this._precision;
};

ModulusCombine.prototype.compress = function(x, y) {
	x = Math.floor(x * this._precision);
	y = Math.floor(y * this._precision);
	return x * this._maxy + y;
};

ModulusCombine.prototype.deflate = function(z) {
	var x = Math.floor(z / this._maxy);
	return [
		x / this._precision,
		(z % this._maxy) / this._precision
	];
};

module.exports = ModulusCombine;
