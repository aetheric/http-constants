/* globals describe, require, it */
'use strict';

describe('The root consts module', () => {

	it('should be able to be imported without fuss', () => {
		require('../../target/dist/consts.js');
		require('../../target/dist/consts.min.js');
	})

});
