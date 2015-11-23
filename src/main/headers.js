/* global */
'use strict';

/**
 * Content-Types that are acceptable for the response. See Content negotiation. Permanent.
 * Examples:
 * <code>Accept: text/plain</code>
 * @type {String}
 */
export const ACCEPT = 'Accept';

/**
 * Character sets that are acceptable. Permanent.
 * Examples:
 * <code>Accept-Charset: utf-8</code>
 * @type {String}
 */
export const ACCEPT_CHARSET = 'Accept-Charset';

/**
 * List of acceptable encodings. See HTTP compression. Permanent.
 * Examples:
 * <code>Accept-Encoding: gzip, deflate</code>
 * @type {String}
 */
export const ACCEPT_ENCODING = 'Accept-Encoding';

/**
 * List of acceptable human languages for response. See Content negotiation. Permanent.
 * Examples:
 * <code>Accept-Language: en-US</code>
 * @type {String}
 */
export const ACCEPT_LANGUAGE = 'Accept-Language';

/**
 * Acceptable version in time. Provisional.
 * Examples:
 * <code>Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT</code>
 * @type {String}
 */
export const ACCEPT_DATETIME = 'Accept-Datetime';

/**
 * Authentication credentials for HTTP authentication. Permanent.
 * Examples:
 * <code>Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code>
 * @type {String}
 */
export const AUTHORIZATION = 'Authorization';

/**
 * Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain.
 * Permanent.
 * Examples:
 * <code>Cache-Control: no-cache</code>
 * @type {String}
 */
export const CACHE_CONTROL = 'Cache-Control';

/**
 * Control options for the current connection and list of hop-by-hop request fields. Permanent.
 * Examples:
 * <code>Connection: keep-alive</code>
 * <code>Connection: Upgrade</code>
 * @type {String}
 */
export const CONNECTION = 'Connection';

/**
 * An HTTP cookie previously sent by the server with Set-Cookie (below). Permanent: standard.
 * Examples:
 * <code>Cookie: $Version=1; Skin=new;</code>
 * @type {String}
 */
export const COOKIE = 'Cookie';

/**
 * The length of the request body in octets (8-bit bytes). Permanent.
 * Examples:
 * <code>Content-Length: 348</code>
 * @type {String}
 */
export const CONTENT_LENGTH = 'Content-Length';

/**
 * A Base64-encoded binary MD5 sum of the content of the request body. Obsolete.
 * Examples:
 * <code>Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==</code>
 * @type {String}
 */
export const CONTENT_MD5 = 'Content-MD5';

/**
 * The MIME type of the body of the request (used with POST and PUT requests). Permanent.
 * <code>Content-Type: application/x-www-form-urlencoded</code>
 * @type {String}
 */
export const CONTENT_TYPE = 'Content-Type';

/**
 * The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231 Date/Time Formats).
 * Permanent.
 * Examples:
 * <code>Date: Tue, 15 Nov 1994 08:12:31 GMT</code>
 * @type {String}
 */
export const DATE = 'Date';

/**
 * Indicates that particular server behaviors are required by the client. Permanent.
 * Examples:
 * <code>Expect: 100-continue</code>
 * @type {String}
 */
export const EXPECT = 'Expect';

/**
 * The email address of the user making the request. Permanent.
 * Examples:
 * <code>From: user@example.com</code>
 * @type {String}
 */
export const FROM = 'From';

/**
 * The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The
 * port number may be omitted if the port is the standard port for the service requested. Permanent. Mandatory since
 * HTTP/1.1.
 * Examples:
 * <code>Host: en.wikipedia.org:80</code>
 * <code>Host: en.wikipedia.org</code>
 * @type {String}
 */
export const HOST = 'Host';

/**
 * Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for
 * methods like PUT to only update a resource if it has not been modified since the user last updated it. Permanent.
 * Examples:
 * <code>If-Match: "737060cd8c284d8af7ad3082f209582d"</code>
 * @type {String}
 */
export const IF_MATCH = 'If-Match';

/**
 * Allows a 304 Not Modified to be returned if content is unchanged. Permanent.
 * Examples:
 * <code>If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT</code>
 * @type {String}
 */
export const IF_MODIFIED_SINCE = 'If-Modified-Since';

/**
 * Allows a 304 Not Modified to be returned if content is unchanged, see HTTP ETag. Permanent.
 * Examples:
 * <code>If-None-Match: "737060cd8c284d8af7ad3082f209582d"</code>
 * @type {String}
 */
export const IF_NONE_MATCH = 'If-None-Match';

/**
 * If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity.
 * Permanent.
 * Examples:
 * <code>If-Range: "737060cd8c284d8af7ad3082f209582d"</code>
 * @type {String}
 */
export const IF_RANGE = 'If-Range';

/**
 * Only send the response if the entity has not been modified since a specific time. Permanent.
 * Examples:
 * <code>If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT</code>
 * @type {String}
 */
export const IF_UNMODIFIED_SINCE = 'If-Unmodified-Since';

/**
 * Limit the number of times the message can be forwarded through proxies or gateways. Permanent.
 * Examples:
 * <code>Max-Forwards: 10</code>
 * @type {String}
 */
export const MAX_FORWARDS = 'Max-Forwards';

/**
 * Initiates a request for cross-origin resource sharing (asks server for an 'Access-Control-Allow-Origin' response
 * field). Permanent: standard.
 * Examples:
 * <code>Origin: http://www.example-social-network.com</code>
 * @type {String}
 */
export const Origin = 'Origin';

/**
 * Implementation-specific fields that may have various effects anywhere along the request-response chain. Permanent.
 * Examples:
 * <code>Pragma: no-cache</code>
 * @type {String}
 */
export const PRAGMA = 'Pragma';

/**
 * Authorization credentials for connecting to a proxy. Permanent.
 * Examples:
 * <code>Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==</code>
 * @type {String}
 */
export const PROXY_AUTHORIZATION = 'Proxy-Authorization';

/**
 * Request only part of an entity. Bytes are numbered from 0. See Byte serving. Permanent.
 * Examples:
 * <code>Range: bytes=500-999</code>
 * @type {String}
 */
export const RANGE = 'Range';

/**
 * This is the address of the previous web page from which a link to the currently requested page was followed. (The
 * word “referrer” has been misspelled in the RFC as well as in most implementations to the point that it has become
 * standard usage and is considered correct terminology). Permanent.
 * Examples:
 * <code>Referer: http://en.wikipedia.org/wiki/Main_Page</code>
 * @type {String}
 */
export const REFERER = 'Referer';


TE	The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk.	TE: trailers, deflate	Permanent

/**
 * The user agent string of the user agent	User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0	Permanent
 */
export const User-Agent = 'User-Agent';

/**
 * Ask the server to upgrade to another protocol.	Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11	Permanent
 */
export const Upgrade = 'Upgrade';

/**
 * Informs the server of proxies through which the request was sent.	Via: 1.0 fred, 1.1 example.com (Apache/1.1)	Permanent
 */
export const Via = 'Via';

/**
 * A general warning about possible problems with the entity body.	Warning: 199 Miscellaneous warning	Permanent
 */
export const Warning = 'Warning';


/**
 * mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest	X-Requested-With: XMLHttpRequest
 */
export const X-Requested-With = 'X-Requested-With';

/**
 * Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field.[12] On March 7, 2011, a draft proposal was submitted to IETF.[13] The W3C Tracking Protection Working Group is producing a specification.[14]	DNT: 1 (Do Not Track Enabled)
 */
export const DNT[11] = 'DNT[11]';

DNT: 0 (Do Not Track Disabled)

/**
 * a de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer	X-Forwarded-For: client1, proxy1, proxy2
 */
export const X-Forwarded-For[15] = 'X-Forwarded-For[15]';

X-Forwarded-For: 129.78.138.66, 129.78.64.103

/**
 * a de facto standard for identifying the original host requested by the client in the Host HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request.	X-Forwarded-Host: en.wikipedia.org:80
 */
export const X-Forwarded-Host[16] = 'X-Forwarded-Host[16]';

X-Forwarded-Host: en.wikipedia.org

/**
 * a de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers.	X-Forwarded-Proto: https
 */
export const X-Forwarded-Proto[17] = 'X-Forwarded-Proto[17]';

/**
 * Non-standard header field used by Microsoft applications and load-balancers	Front-End-Https: on
 */
export const Front-End-Https[18] = 'Front-End-Https[18]';

/**
 * Requests a web application override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). Can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do).	X-HTTP-Method-Override: DELETE
 */
export const X-Http-Method-Override[19] = 'X-Http-Method-Override[19]';

/**
 * Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&T Devices	X-Att-Deviceid: GT-P7320/P7320XXLPG
 */
export const X-ATT-DeviceId[20] = 'X-ATT-DeviceId[20]';

/**
 * Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&T Samsung Galaxy S2.	x-wap-profile: http://wap.samsungmobile.com/uaprof/SGH-I777.xml
 */
export const X-Wap-Profile[21] = 'X-Wap-Profile[21]';

		Proxy-Connection[22]	Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field.	Proxy-Connection: keep-alive
/**
 * Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie"	X-UIDH: ...
 */
export const X-UIDH[23][24][25] = 'X-UIDH[23][24][25]';

/**
 * Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken[27] and X-XSRF-TOKEN[28]	X-Csrf-Token: i8XNjC4b8KVok4uw5RftR38Wgp2BFwql
 */
export const X-Csrf-Token[26] = 'X-Csrf-Token[26]';


/**
 * Specifying which web sites can participate in cross-origin resource sharing	Access-Control-Allow-Origin: *	Provisional
 */
export const Access-Control-Allow-Origin = 'Access-Control-Allow-Origin';

/**
 * Specifies which patch document formats this server supports	Accept-Patch: text/example;charset=utf-8	Permanent
 */
export const Accept-Patch[29] = 'Accept-Patch[29]';

/**
 * What partial content range types this server supports via byte serving	Accept-Ranges: bytes	Permanent
 */
export const Accept-Ranges = 'Accept-Ranges';

/**
 * The age the object has been in a proxy cache in seconds	Age: 12	Permanent
 */
export const Age = 'Age';

/**
 * Valid actions for a specified resource. To be used for a 405 Method not allowed	Allow: GET, HEAD	Permanent
 */
export const Allow = 'Allow';

/**
 * Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds	Cache-Control: max-age=3600	Permanent
 */
export const Cache-Control = 'Cache-Control';

/**
 * Control options for the current connection and list of hop-by-hop response fields[8]	Connection: close	Permanent
 */
export const Connection = 'Connection';

/**
 * An opportunity to raise a "File Download" dialogue box for a known MIME type with binary format or suggest a filename for dynamic content. Quotes are necessary with special characters.	Content-Disposition: attachment; filename="fname.ext"	Permanent
 */
export const Content-Disposition[30] = 'Content-Disposition[30]';

/**
 * The type of encoding used on the data. See HTTP compression.	Content-Encoding: gzip	Permanent
 */
export const Content-Encoding = 'Content-Encoding';

/**
 * The natural language or languages of the intended audience for the enclosed content[31]	Content-Language: da	Permanent
 */
export const Content-Language = 'Content-Language';

/**
 * The length of the response body in octets (8-bit bytes)	Content-Length: 348	Permanent
 */
export const Content-Length = 'Content-Length';

/**
 * An alternate location for the returned data	Content-Location: /index.htm	Permanent
 */
export const Content-Location = 'Content-Location';

/**
 * A Base64-encoded binary MD5 sum of the content of the response	Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==	Obsolete[32]
 */
export const Content-MD5 = 'Content-MD5';

/**
 * Where in a full body message this partial message belongs	Content-Range: bytes 21010-47021/47022	Permanent
 */
export const Content-Range = 'Content-Range';

/**
 * The MIME type of this content	Content-Type: text/html; charset=utf-8	Permanent
 */
export const Content-Type = 'Content-Type';

/**
 * The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231)	Date: Tue, 15 Nov 1994 08:12:31 GMT	Permanent
 */
export const Date = 'Date';

/**
 * An identifier for a specific version of a resource, often a message digest	ETag: "737060cd8c284d8af7ad3082f209582d"	Permanent
 */
export const ETag = 'ETag';

/**
 * Gives the date/time after which the response is considered stale (in "HTTP-date" format as defined by RFC 7231)	Expires: Thu, 01 Dec 1994 16:00:00 GMT	Permanent: standard
 */
export const Expires = 'Expires';

/**
 * The last modified date for the requested object (in "HTTP-date" format as defined by RFC 7231)	Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT	Permanent
 */
export const Last-Modified = 'Last-Modified';

/**
 * Used to express a typed relationship with another resource, where the relation type is defined by RFC 5988	Link: </feed>; rel="alternate"[33]	Permanent
 */
export const Link = 'Link';

/**
 * Used in redirection, or when a new resource has been created.	Location: http://www.w3.org/pub/WWW/People.html	Permanent
 */
export const Location = 'Location';

		P3P	This field is supposed to set P3P policy, in the form of P3P:CP="your_compact_policy". However, P3P did not take off,[34] most browsers have never fully implemented it, a lot of websites set this field with fake policy text, that was enough to fool browsers the existence of P3P policy and grant permissions for third party cookies.	P3P: CP="This is not a P3P policy! See http://www.google.com/support/accounts/bin/answer.py?hl=en&answer=151657 for more info."	Permanent
/**
 * Implementation-specific fields that may have various effects anywhere along the request-response chain.	Pragma: no-cache	Permanent
 */
export const Pragma = 'Pragma';

/**
 * Request authentication to access the proxy.	Proxy-Authenticate: Basic	Permanent
 */
export const Proxy-Authenticate = 'Proxy-Authenticate';

/**
 * HTTP Public Key Pinning, announces hash of website's authentic TLS certificate	Public-Key-Pins: max-age=2592000; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g=";	Permanent
 */
export const Public-Key-Pins[35] = 'Public-Key-Pins[35]';

/**
 * Used in redirection, or when a new resource has been created. This refresh redirects after 5 seconds.	Refresh: 5; url=http://www.w3.org/pub/WWW/People.html	Proprietary and non-standard: a header extension introduced by Netscape and supported by most web browsers.
 */
export const Refresh = 'Refresh';

/**
 * If an entity is temporarily unavailable, this instructs the client to try again later. Value could be a specified period of time (in seconds) or a HTTP-date.[36]
 */
export const Retry-After = 'Retry-After';

Example 1: Retry-After: 120
Example 2: Retry-After: Fri, 07 Nov 2014 23:59:59 GMT
Permanent

/**
 * A name for the server	Server: Apache/2.4.1 (Unix)	Permanent
 */
export const Server = 'Server';

/**
 * An HTTP cookie	Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1	Permanent: standard
 */
export const Set-Cookie = 'Set-Cookie';

/**
 * CGI header field specifying the status of the HTTP response. Normal HTTP responses use a separate "Status-Line" instead, defined by RFC 7230.[37]	Status: 200 OK	Not listed as a registered field name
 */
export const Status = 'Status';

/**
 * A HSTS Policy informing the HTTP client how long to cache the HTTPS only policy and whether this applies to subdomains.	Strict-Transport-Security: max-age=16070400; includeSubDomains	Permanent: standard
 */
export const Strict-Transport-Security = 'Strict-Transport-Security';

/**
 * The Trailer general field value indicates that the given set of header fields is present in the trailer of a message encoded with chunked transfer coding.	Trailer: Max-Forwards	Permanent
 */
export const Trailer = 'Trailer';

/**
 * The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.	Transfer-Encoding: chunked	Permanent
 */
export const Transfer-Encoding = 'Transfer-Encoding';

/**
 * Ask the client to upgrade to another protocol.	Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11	Permanent
 */
export const Upgrade = 'Upgrade';

/**
 * Tells downstream proxies how to match future request headers to decide whether the cached response can be used rather than requesting a fresh one from the origin server.	Vary: *	Permanent
 */
export const Vary = 'Vary';

/**
 * Informs the client of proxies through which the response was sent.	Via: 1.0 fred, 1.1 example.com (Apache/1.1)	Permanent
 */
export const Via = 'Via';

/**
 * A general warning about possible problems with the entity body.	Warning: 199 Miscellaneous warning	Permanent
 */
export const Warning = 'Warning';

/**
 * Indicates the authentication scheme that should be used to access the requested entity.	WWW-Authenticate: Basic	Permanent
 */
export const WWW-Authenticate = 'WWW-Authenticate';

/**
 * Clickjacking protection: deny - no rendering within a frame, sameorigin - no rendering if origin mismatch, allow-from - allow from specified location, allowall - non-standard, allow from any location	X-Frame-Options: deny	Obsolete[39]
 */
export const X-Frame-Options[38] = 'X-Frame-Options[38]';

/**
 * Cross-site scripting (XSS) filter	X-XSS-Protection: 1; mode=block
 */
export const X-XSS-Protection[40] = 'X-XSS-Protection[40]';

/**
 * X-Content-Security-Policy, X-WebKit-CSP[41]	Content Security Policy definition.	X-WebKit-CSP: default-src 'self'
 */
export const Content-Security-Policy, = 'Content-Security-Policy,';

/**
 * The only defined value, "nosniff", prevents Internet Explorer from MIME-sniffing a response away from the declared content-type. This also applies to Google Chrome, when downloading extensions.[43]	X-Content-Type-Options: nosniff
 */
export const X-Content-Type-Options[42] = 'X-Content-Type-Options[42]';

/**
 * specifies the technology (e.g. ASP.NET, PHP, JBoss) supporting the web application (version details are often in X-Runtime, X-Version, or X-AspNet-Version)	X-Powered-By: PHP/5.4.0
 */
export const X-Powered-By[44] = 'X-Powered-By[44]';

/**
 * Recommends the preferred rendering engine (often a backward-compatibility mode) to use to display the content. Also used to activate Chrome Frame in Internet Explorer.	X-UA-Compatible: IE=EmulateIE7
 */
export const X-UA-Compatible[45] = 'X-UA-Compatible[45]';

X-UA-Compatible: IE=edge
X-UA-Compatible: Chrome=1
/**
 * Provide the duration of the audio or video in seconds; only supported by Gecko browsers	X-Content-Duration: 42.666
 */
export const X-Content-Duration[46] = 'X-Content-Duration[46]';

