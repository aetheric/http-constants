/* globals */
'use strict';

/**
 * @typedef {Object} CONSTSHEADERSREQUEST
 */

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
 * <code>Cookie: $Version=1, Skin=new,</code>
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
 * If the entity is unchanged, send me the part(s) that I am missing, otherwise, send me the entire new entity.
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
 * word �referrer� has been misspelled in the RFC as well as in most implementations to the point that it has become
 * standard usage and is considered correct terminology). Permanent.
 * Examples:
 * <code>Referer: http://en.wikipedia.org/wiki/Main_Page</code>
 * @type {String}
 */
export const REFERER = 'Referer';

/**
 * The transfer encodings the user agent is willing to accept: the same values as for the response header field
 * Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the
 * server it expects to receive additional fields in the trailer after the last, zero-sized, chunk. Permanent.
 * Examples:
 * <code>TE: trailers, deflate</code>
 * @type {String}
 */
export const TE = 'TE';

/**
 * The user agent string of the user agent. Permanent.
 * Examples:
 * <code>User-Agent: Mozilla/5.0 (X11, Linux x86_64, rv:12.0) Gecko/20100101 Firefox/21.0</code>
 * @type {String}
 */
export const USER_AGENT = 'User-Agent';

/**
 * Ask the server to upgrade to another protocol. Permanent.
 * Examples:
 * <code>Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11</code>
 * @type {String}
 */
export const UPGRADE = 'Upgrade';

/**
 * Informs the server of proxies through which the request was sent. Permanent.
 * Examples:
 * <code>Via: 1.0 fred, 1.1 example.com (Apache/1.1)</code>
 * @type {String}
 */
export const VIA = 'Via';

/**
 * A general warning about possible problems with the entity body. Permanent.
 * Examples:
 * <code>Warning: 199 Miscellaneous warning</code>
 * @type {String}
 */
export const WARNING = 'Warning';

/**
 * mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest.
 * Examples:
 * <code>X-Requested-With: XMLHttpRequest</code>
 * @type {String}
 */
export const X_REQUESTED_WITH = 'X-Requested-With';

/**
 * Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track
 * header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field. On March 7, 2011, a
 * draft proposal was submitted to IETF. The W3C Tracking Protection Working Group is producing a specification.
 * Examples:
 * <code>DNT: 1 (Do Not Track Enabled)</code>
 * <code>DNT: 0 (Do Not Track Disabled)</code>
 * @type {String}
 */
export const DNT = 'DNT';

/**
 * A de facto standard for identifying the originating IP address of a client connecting to a web server through an
 * HTTP proxy or load balancer.
 * Examples:
 * <code>X-Forwarded-For: client1, proxy1, proxy2</code>
 * <code>X-Forwarded-For: 129.78.138.66, 129.78.64.103</code>
 * @type {String}
 */
export const X_FORWARDED_FOR = 'X-Forwarded-For';


/**
 * A de facto standard for identifying the original host requested by the client in the Host HTTP request header, since
 * the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the
 * request.
 * Examples:
 * <code>X-Forwarded-Host: en.wikipedia.org:80</code>
 * <code>X-Forwarded-Host: en.wikipedia.org</code>
 * @type {String}
 */
export const X_FORWARDED_HOST = 'X-Forwarded-Host';

/**
 * A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (load
 * balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An
 * alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers.
 * Examples:
 * <code>X-Forwarded-Proto: https</code>
 * @type {String}
 */
export const X_FORWARDED_PROTO = 'X-Forwarded-Proto';

/**
 * Non-standard header field used by Microsoft applications and load-balancers.
 * Examples:
 * <code>Front-End-Https: on</code>
 * @type {String}
 */
export const FRONT_END_HTTPS = 'Front-End-Https';

/**
 * Requests a web application override the method specified in the request (typically POST) with the method given in
 * the header field (typically PUT or DELETE). Can be used when a user agent or firewall prevents PUT or DELETE methods
 * from being sent directly (note that this either a bug in the software component, which ought to be fixed, or an
 * intentional configuration, in which case bypassing it may be the wrong thing to do).
 * Examples:
 * <code>X-HTTP-Method-Override: DELETE</code>
 * @type {String}
 */
export const X_HTTP_METHOD_OVERRIDE = 'X-Http-Method-Override';

/**
 * Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&T Devices.
 * Examples:
 * <code>X-Att-Deviceid: GT-P7320/P7320XXLPG</code>
 * @type {String}
 */
export const X_ATT_DEVICEID = 'X-ATT-DeviceId';

/**
 * Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&T Samsung Galaxy S2.    x-wap-profile: http://wap.samsungmobile.com/uaprof/SGH-I777.xml
 */
export const X_WAP_PROFILE = 'X-Wap-Profile';

