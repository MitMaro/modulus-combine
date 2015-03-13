/**
 * Create an instance of Modulus Combine
 * @param {number} yDigits Number of digits of value of y
 * @param {number} fractionalDigits Number of digits after the decimal to retain
 * @constructor
 */
var ModulusCombine = function(yDigits, fractionalDigits) {
	this._precision = Math.pow(10, fractionalDigits || 0);
	this._maxy = Math.pow(10, yDigits) * this._precision;
};

/**
 * Compress two values into one integer
 *
 * @param {number} x The number with the greatest maximum
 * @param {number} y The other number
 * @returns {number} The combined number
 */
ModulusCombine.prototype.compress = function(x, y) {
	x = Math.floor(x * this._precision);
	y = Math.floor(y * this._precision);
	return x * this._maxy + y;
};

/**
 * Deflate the values from z
 * @param z The compressed value
 * @returns {number[]} A tuple of the values
 */
ModulusCombine.prototype.deflate = function(z) {
	var x = Math.floor(z / this._maxy);
	return [
		x / this._precision,
		(z % this._maxy) / this._precision
	];
};

module.exports = ModulusCombine;
