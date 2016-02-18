/* globals */
'use strict';

import _codes from './consts-codes.js';
import _headers from './consts-headers.js';
import _methods from './consts-methods.js';
import _types from './consts-types.js';

/**
 * @typedef {Object} CONSTS
 */
export default Object.freeze({

	/**
	 * @type {CONSTSCODES}
	 */
	codes: _codes,

	/**
	 * @type {CONSTSHEADERS}
	 */
	headers: _headers,

	/**
	 * @type {CONSTSMETHODS}
	 */
	methods: _methods,

	/**
	 * @type {CONSTSTYPES}
	 */
	types: _types

});
