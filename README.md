# Modulus Combine

[![Dependency Status](https://david-dm.org/MitMaro/modulus-combine.svg)](https://david-dm.org/MitMaro/modulus-combine)


## Install

    npm install modulus-combine

## Documentation

### Full API Docs
[ComboKeys Context JSDocs](http://www.mitmaro.ca/modulus-combine/documentation/latest/)

### Basic Usage

```javascript
var ModulusCombine = require('modulus-combine');

// 4 digits before the decimal and keep 5 decimal digits (9 total)
var modulusCombine = new ModulusCombine(4, 10);

modulusCombine.compress(3.456789, 367.123123123);
// -> 34567800000036712000

modulusCombine.deflate(34567800000036712000);
// -> [ 3.45678, 367.12448 ]

```

## License

Modulus Combine is released under the ISC license. See [LICENSE](LICENSE).
