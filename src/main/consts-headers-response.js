/* globals */
'use strict';

/**
 * @typedef {Object} CONSTSHEADERSRESPONSE
 */
export default Object.freeze({

	/**
	 * Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field.    Proxy-Connection: keep-alive
	 * @type {String}
	 */
	PROXY_CONNECTION: 'Proxy-Connection',

	/**
	 * Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless, also known as "perma-cookie" or "supercookie"    X-UIDH: ...
	 */
	X_UIDH: 'X-UIDH',

	/**
	 * Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken and X-XSRF-TOKEN    X-Csrf-Token: i8XNjC4b8KVok4uw5RftR38Wgp2BFwql
	 */
	X_CSRF_TOKEN: 'X-Csrf-Token',

	/**
	 * Specifying which web sites can participate in cross-origin resource sharing    Access-Control-Allow-Origin: *    Provisional
	 */
	ACCESS_CONTROL_ALLOW_ORIGIN: 'Access-Control-Allow-Origin',

	/**
	 * Specifies which patch document formats this server supports    Accept-Patch: text/example,charset=utf-8    Permanent
	 */
	ACCEPT_PATCH: 'Accept-Patch',

	/**
	 * What partial content range types this server supports via byte serving    Accept-Ranges: bytes    Permanent
	 */
	ACCEPT_RANGES: 'Accept-Ranges',

	/**
	 * The age the object has been in a proxy cache in seconds    Age: 12    Permanent
	 */
	AGE: 'Age',

	/**
	 * Valid actions for a specified resource. To be used for a 405 Method not allowed    Allow: GET, HEAD    Permanent
	 */
	ALLOW: 'Allow',

	/**
	 * Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds    Cache-Control: max-age=3600    Permanent
	 */
	CACHE_CONTROL: 'Cache-Control',

	/**
	 * Control options for the current connection and list of hop-by-hop response fields    Connection: close    Permanent
	 */
	CONNECTION: 'Connection',

	/**
	 * An opportunity to raise a "File Download" dialogue box for a known MIME type with binary format or suggest a filename for dynamic content. Quotes are necessary with special characters.    Content-Disposition: attachment, filename="fname.ext"    Permanent
	 */
	CONTENT_DISPOSITION: 'Content-Disposition',

	/**
	 * The type of encoding used on the data. See HTTP compression.    Content-Encoding: gzip    Permanent
	 */
	CONTENT_ENCODING: 'Content-Encoding',

	/**
	 * The natural language or languages of the intended audience for the enclosed content    Content-Language: da    Permanent
	 */
	CONTENT_LANGUAGE: 'Content-Language',

	/**
	 * The length of the response body in octets (8-bit bytes)    Content-Length: 348    Permanent
	 */
	CONTENT_LENGTH: 'Content-Length',

	/**
	 * An alternate location for the returned data    Content-Location: /index.htm    Permanent
	 */
	CONTENT_LOCATION: 'Content-Location',

	/**
	 * A Base64-encoded binary MD5 sum of the content of the response    Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==    Obsolete
	 */
	CONTENT_MD5: 'Content-MD5',

	/**
	 * Where in a full body message this partial message belongs    Content-Range: bytes 21010-47021/47022    Permanent
	 */
	CONTENT_RANGE: 'Content-Range',

	/**
	 * The MIME type of this content    Content-Type: text/html, charset=utf-8    Permanent
	 */
	CONTENT_TYPE: 'Content-Type',

	/**
	 * The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231)    Date: Tue, 15 Nov 1994 08:12:31 GMT    Permanent
	 */
	DATE: 'Date',

	/**
	 * An identifier for a specific version of a resource, often a message digest    ETag: "737060cd8c284d8af7ad3082f209582d"    Permanent
	 */
	ETAG: 'ETag',

	/**
	 * Gives the date/time after which the response is considered stale (in "HTTP-date" format as defined by RFC 7231)    Expires: Thu, 01 Dec 1994 16:00:00 GMT    Permanent: standard
	 */
	EXPIRES: 'Expires',

	/**
	 * The last modified date for the requested object (in "HTTP-date" format as defined by RFC 7231)    Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT    Permanent
	 */
	LAST_MODIFIED: 'Last-Modified',

	/**
	 * Used to express a typed relationship with another resource, where the relation type is defined by RFC 5988    Link: </feed>, rel="alternate"    Permanent
	 */
	LINK: 'Link',

	/**
	 * Used in redirection, or when a new resource has been created.    Location: http://www.w3.org/pub/WWW/People.html    Permanent
	 */
	LOCATION: 'Location',

	/**
	 * This field is supposed to set P3P policy, in the form of P3P:CP="your_compact_policy". However, P3P did not take off, most browsers have never fully implemented it, a lot of websites set this field with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies.    P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info."    Permanent
	 * @type {string}
	 */
	P3P: 'P3P',

	/**
	 * Implementation-specific fields that may have various effects anywhere along the request-response chain.    Pragma: no-cache    Permanent
	 */
	PRAGMA: 'Pragma',

	/**
	 * Request authentication to access the proxy.    Proxy-Authenticate: Basic    Permanent
	 */
	PROXY_AUTHENTICATION: 'Proxy-Authenticate',

	/**
	 * HTTP Public Key Pinning, announces hash of website's authentic TLS certificate    Public-Key-Pins: max-age=2592000, pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g=",    Permanent
	 */
	PUBLIC_KEY_PINS: 'Public-Key-Pins',

	/**
	 * Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds.    Refresh: 5, url=http://www.w3.org/pub/WWW/People.html    Proprietary and non-standard: a header extension introduced by Netscape and supported by most web browsers.
	 */
	REFRESH: 'Refresh',

	/**
	 * If an entity is temporarily unavailable, this instructs the client to try again later. Value could be a specified period of time (in seconds) or a HTTP-date.

	 Example 1: Retry-After: 120
	 Example 2: Retry-After: Fri, 07 Nov 2014 23:59:59 GMT
	 Permanent
	 *
	 */
	RETRY_AFTER: 'Retry-After',

	/**
	 * A name for the server    Server: Apache/2.4.1 (Unix)    Permanent
	 */
	SERVER: 'Server',

	/**
	 * An HTTP cookie    Set-Cookie: UserID=JohnDoe, Max-Age=3600, Version=1    Permanent: standard
	 */
	SET_COOKIE: 'Set-Cookie',

	/**
	 * CGI header field specifying the status of the HTTP response. Normal HTTP responses use a separate "Status-Line" instead, defined by RFC 7230.    Status: 200 OK    Not listed as a registered field name
	 */
	STATUS: 'Status',

	/**
	 * A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains.    Strict-Transport-Security: max-age=16070400, includeSubDomains    Permanent: standard
	 */
	STRICT_TRANSPORT_SECURITY: 'Strict-Transport-Security',

	/**
	 * The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding.    Trailer: Max-Forwards    Permanent
	 */
	TRAILER: 'Trailer',

	/**
	 * The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.    Transfer-Encoding: chunked    Permanent
	 */
	TRANSFER_ENCODING: 'Transfer-Encoding',

	/**
	 * Ask the client to upgrade to another protocol.    Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11    Permanent
	 */
	UPGRADE: 'Upgrade',

	/**
	 * Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server.    Vary: *    Permanent
	 */
	VARY: 'Vary',

	/**
	 * Informs the client of proxies through which the response was sent.    Via: 1.0 fred, 1.1 example.com (Apache/1.1)    Permanent
	 */
	VIA: 'Via',

	/**
	 * A general warning about possible problems with the entity body.    Warning: 199 Miscellaneous warning    Permanent
	 */
	WARNING: 'Warning',

	/**
	 * Indicates the authentication scheme that should be used to access the requested entity.    WWW-Authenticate: Basic    Permanent
	 */
	WWW_AUTHENTICATE: 'WWW-Authenticate',

	/**
	 * Clickjacking protection: deny - no rendering within a frame, sameorigin - no rendering if origin mismatch, allow-from - allow from specified location, allowall - non-standard, allow from any location    X-Frame-Options: deny    Obsolete
	 */
	X_FRAME_OPTIONS: 'X-Frame-Options',

	/**
	 * Cross-site scripting (XSS) filter    X-XSS-Protection: 1, mode=block
	 */
	X_XSS_PROTECTION: 'X-XSS-Protection',

	/**
	 * X-Content-Security-Policy, X-WebKit-CSP    Content Security Policy definition.    X-WebKit-CSP: default-src 'self'
	 */
	CONTENT_SECURITY_POLICY: 'Content-Security-Policy,',

	/**
	 * The only defined value, "nosniff", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions.    X-Content-Type-Options: nosniff
	 */
	X_CONTENT_TYPE_OPTIONS: 'X-Content-Type-Options',

	/**
	 * specifies the technology (e.g. ASP.NET, PHP, JBoss) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)    X-Powered-By: PHP/5.4.0
	 */
	X_POWERED_BY: 'X-Powered-By',

	/**
	 * Recommends the preferred rendering engine (often a backward-compatibility mode) to use to display the content. Also used to activate Chrome Frame in Internet Explorer.    X-UA-Compatible: IE=EmulateIE7

	 X-UA-Compatible: IE=edge
	 X-UA-Compatible: Chrome=1
	 */
	X_UA_COMPATIBLE: 'X-UA-Compatible',

	/**
	 * Provide the duration of the audio or video in seconds, only supported by Gecko browsers    X-Content-Duration: 42.666
	 */
	X_CONTENT_DURATION: 'X-Content-Duration'


});
