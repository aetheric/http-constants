# HTTP CONSTANTS

## Usage

There are four ways of using this package:

1. If using es6 modules, just use `import * from 'http-constants/src/main/consts.js'` and you should be fine. As with any es6 module usage, you can get as fine-grained with that as you'd like.

2. If not using es6, the regular node/es5 syntax should work, though you'll need to reference the transpiled file: `var http_const = require('http-constants/target/dist/consts.js');`, though this is referenced in the package, so `var http_const = require('http-constants')` should do.

3. Exactly like option #2, but using the minified version.

4. Something else involving file copying and/or a build pipeline.

## Contributing

Just submit a pull request and I'll get right on integrating it.
