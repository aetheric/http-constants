/* global */
'use strict';

/**
 * Continue
 *
 * This means that the server has received the request headers, and that the client should proceed to send the request body (in the case of a request for which a body needs to be sent; for example, a POST request). If the request body is large, sending it to a server when a request has already been rejected based upon inappropriate headers is inefficient. To have a server check if the request could be accepted based on the request's headers alone, a client must send Expect: 100-continue as a header in its initial request and check if a 100 Continue status code is received in response before continuing (or receive 417 Expectation Failed and not continue).[6]
 * @type {Number}
 */
export const CONTINUE = 100;

/**
 * Switching Protocols
 *
 * This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.[7]
 * @type {Number}
 */
export const SWITCHING_PROTOCOLS = 101;

/**
 * Processing (WebDAV; RFC 2518)
 *
 * As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[8] This prevents the client from timing out and assuming the request was lost.
 * @type {Number}
 */
export const PROCESSING = 102;

/**
 * OK
 *
 * Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request, the response will contain an entity describing or containing the result of the action.[10]
 * @type {Number}
 */
export const OK = 200;

/**
 * Created
 *
 * The request has been fulfilled and resulted in a new resource being created.[11]
 * @type {Number}
 */
export const CREATED = 201;

/**
 * Accepted
 *
 * The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.[12]
 * @type {Number}
 */
export const ACCEPTED = 202;

/**
 * Non-Authoritative Information (since HTTP/1.1)
 *
 * The server successfully processed the request, but is returning information that may be from another source.[13]
 * @type {Number}
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;

/**
 * No Content
 *
 * The server successfully processed the request, but is not returning any content.[14]
 * @type {Number}
 */
export const NO_CONTENT = 204;

/**
 * Reset Content
 *
 * The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.[15]
 * @type {Number}
 */
export const RESET_CONTENT = 205;

/**
 * Partial Content (RFC 7233)
 *
 * The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by HTTP clients to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.[16]
 * @type {Number}
 */
export const PARTIAL_CONTENT = 206;

/**
 * Multi-Status (WebDAV; RFC 4918)
 *
 * The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.[17]
 * @type {Number}
 */
export const MULTI_STATUS = 207;

/**
 * Already Reported (WebDAV; RFC 5842)
 *
 * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.[18]
 * @type {Number}
 */
export const ALREADY_REPORTED = 208;

/**
 * IM Used (RFC 3229)
 *
 * The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.[19]
 * @type {Number}
 */
export const IM_USED = 226;

/**
 * Multiple Choices
 *
 * Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video, list files with different extensions, or word sense disambiguation.[22]
 * @type {Number}
 */
export const MULTIPLE_CHOICES = 300;

/**
 * Moved Permanently
 *
 * This and all future requests should be directed to the given URI.[23]
 * @type {Number}
 */
export const MOVED_PERMANENTLY = 301;

/**
 * Found
 *
 * This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"),[24] but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.[25] However, some Web applications and frameworks use the 302 status code as if it were the 303.[26]
 * @type {Number}
 */
export const FOUND = 302;

/**
 * See Other (since HTTP/1.1)
 *
 * The response to the request can be found under another URI using a GET method. When received in response to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be issued with a separate GET message.[27]
 * @type {Number}
 */
export const SEE_OTHER = 303;

/**
 * Not Modified (RFC 7232)
 *
 * Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match. This means that there is no need to retransmit the resource, since the client still has a previously-downloaded copy.[28]
 * @type {Number}
 */
export const NOT_MODIFIED = 304;

/**
 * Use Proxy (since HTTP/1.1)
 *
 * The requested resource is only available through a proxy, whose address is provided in the response. Many HTTP clients (such as Mozilla[29] and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.[30]
 * @type {Number}
 */
export const USE_PROXY = 305;

/**
 * Switch Proxy
 *
 * No longer used. Originally meant "Subsequent requests should use the specified proxy."[31]
 * @type {Number}
 */
export const SWITCH_PROXY = 306;

/**
 * Temporary Redirect (since HTTP/1.1)
 *
 * In this case, the request should be repeated with another URI; however, future requests should still use the original URI. In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request. For instance, a POST request should be repeated using another POST request.[32]
 * @type {Number}
 */
export const TEMPORARY_REDIRECT = 307;

/**
 * Permanent Redirect (RFC 7538)
 *
 * The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.[33]
 * @type {Number}
 */
export const PERMANENT_REDIRECT = 308;

/**
 * Resume Incomplete (Google)
 *
 * This code is used in the Resumable HTTP Requests Proposal to resume aborted PUT or POST requests.[34]
 * @type {Number}
 */
export const RESUME_INCOMPLETE = 308;

/**
 * Bad Request
 *
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).[36]
 * @type {Number}
 */
export const BAD_REQUEST = 400;

/**
 * Unauthorized (RFC 7235)
 *
 * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[37]
 * @type {Number}
 */
export const UNAUTHORIZED = 401;

/**
 * Payment Required
 *
 * Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.[38]
 * @type {Number}
 */
export const PAYMENT_REQUIRED = 402;

/**
 * Forbidden
 *
 * The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.[39]
 * @type {Number}
 */
export const FORBIDDEN = 403;

/**
 * Not Found
 *
 * The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.[40]
 * @type {Number}
 */
export const NOT_FOUND = 404;

/**
 * Method Not Allowed
 *
 * A request was made of a resource using a request method not supported by that resource; for example, using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.
 * @type {Number}
 */
export const METHOD_NOT_ALLOWED = 405;

/**
 * Not Acceptable
 *
 * The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.[41]
 * @type {Number}
 */
export const NOT_ACCEPTABLE = 406;

/**
 * Proxy Authentication Required (RFC 7235)
 *
 * The client must first authenticate itself with the proxy.[42]
 * @type {Number}
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;

/**
 * Request Timeout
 *
 * The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."[43]
 * @type {Number}
 */
export const REQUEST_TIMEOUT = 408;

/**
 * Conflict
 *
 * Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.[44]
 * @type {Number}
 */
export const CONFLICT = 409;

/**
 * Gone
 *
 * Indicates that the resource requested is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource again in the future. Clients such as search engines should remove the resource from their indices.[45] Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
 * @type {Number}
 */
export const GONE = 410;

/**
 * Length Required
 *
 * The request did not specify the length of its content, which is required by the requested resource.[46]
 * @type {Number}
 */
export const LENGTH_REQUIRED = 411;

/**
 * Precondition Failed (RFC 7232)
 *
 * The server does not meet one of the preconditions that the requester put on the request.[47]
 * @type {Number}
 */
export const PRECONDITION_FAILED = 412;

/**
 * Payload Too Large (RFC 7231)
 *
 * The request is larger than the server is willing or able to process. Called "Request Entity Too Large" previously.[48]
 * @type {Number}
 */
export const PAYLOAD_TOO_LARGE = 413;

/**
 * URI Too Long (RFC 7231)
 *
 * The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request, in which case it should be converted to a POST request.[49] Called "Request-URI Too Long" previously.[50]
 * @type {Number}
 */
export const URI_TOO_LONG = 414;

/**
 * Unsupported Media Type
 *
 * The request entity has a media type which the server or resource does not support. For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
 * @type {Number}
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;

/**
 * Range Not Satisfiable (RFC 7233)
 *
 * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion. For example, if the client asked for a part of the file that lies beyond the end of the file.[51] Called "Requested Range Not Satisfiable" previously.[52]
 * @type {Number}
 */
export const RANGE_NOT_SATISFIABLE = 416;

/**
 * Expectation Failed
 *
 * The server cannot meet the requirements of the Expect request-header field.[53]
 * @type {Number}
 */
export const EXPECTATION_FAILED = 417;

/**
 * I'm a teapot (RFC 2324)
 *
 * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee.[54] This HTTP status is used as an easter egg in some websites, including Google.com.[55]
 * @type {Number}
 */
export const IM_A_TEAPOT = 418;

/**
 * Authentication Timeout (not in RFC 2616)
 *
 * Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has expired. It is used as an alternative to 401 Unauthorized in order to differentiate from otherwise authenticated clients being denied access to specific server resources.[citation needed][56]
 * @type {Number}
 */
export const AUTHENTICATION_TIMEOUT = 419;

/**
 * Method Failure (Spring Framework)
 *
 * Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed. This status code is deprecated by Spring.[57]
 * @type {Number}
 */
export const METHOD_FAILURE = 420;

/**
 * Enhance Your Calm (Twitter)
 *
 * Not part of the HTTP standard, but returned by version 1 of the Twitter Search and Trends API when the client is being rate limited.[58] Other services may wish to implement the 429 Too Many Requests response code instead.
 * @type {Number}
 */
export const ENHANCE_YOUR_CALM = 420;

/**
 * Misdirected Request (RFC 7540)
 *
 * The request was directed at a server that is not able to produce a response (for example because a connection reuse).[59]
 * @type {Number}
 */
export const MISDIRECTED_REQUEST = 421;

/**
 * Unprocessable Entity (WebDAV; RFC 4918)
 *
 * The request was well-formed but was unable to be followed due to semantic errors.[17]
 * @type {Number}
 */
export const UNPROCESSABLE_ENTITY = 422;

/**
 * Locked (WebDAV; RFC 4918)
 *
 * The resource that is being accessed is locked.[17]
 * @type {Number}
 */
export const LOCKED = 423;

/**
 * Failed Dependency (WebDAV; RFC 4918)
 *
 * The request failed due to failure of a previous request (e.g., a PROPPATCH).[17]
 * @type {Number}
 */
export const FAILED_DEPENDENCY = 424;

/**
 * Upgrade Required
 *
 * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.[60]
 * @type {Number}
 */
export const UPGRADE_REQUIRED = 426;

/**
 * Precondition Required (RFC 6585)
 *
 * The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."[61]
 * @type {Number}
 */
export const PRECONDITION_REQUIRED = 428;

/**
 * Too Many Requests (RFC 6585)
 *
 * The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.[61]
 * @type {Number}
 */
export const TOO_MANY_REQUESTS = 429;

/**
 * Request Header Fields Too Large (RFC 6585)
 *
 * The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.[61]
 * @type {Number}
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;

/**
 * Login Timeout (Microsoft)
 *
 * A Microsoft extension. Indicates that your session has expired.[62]
 * @type {Number}
 */
export const LOGIN_TIMEOUT = 440;

/**
 * No Response (Nginx)
 *
 * Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection (useful as a deterrent for malware).[63]
 * @type {Number}
 */
export const NO_RESPONSE = 444;

/**
 * Retry With (Microsoft)
 *
 * A Microsoft extension. The request should be retried after performing the appropriate action.[64]
 * @type {Number}
 */
export const RETRY_WITH = 449;

/**
 * Blocked by Windows Parental Controls (Microsoft)
 *
 * A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.[65]
 * @type {Number}
 */
export const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450;

/**
 * Unavailable For Legal Reasons (Internet draft)
 *
 * Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources".[66] Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.[67]
 * @type {Number}
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;

/**
 * Redirect (Microsoft)
 *
 * Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users' mailbox.[68] The client is supposed to re-run the HTTP Autodiscovery protocol to find a better suited server.[69]
 * @type {Number}
 */
export const REDIRECT = 451;

/**
 * Request Header Too Large (Nginx)
 *
 * Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4 (on January 21, 2011).[70][original research?]
 * @type {Number}
 */
export const REQUEST_HEADER_TOO_LARGE = 494;

/**
 * Cert Error (Nginx)
 *
 * Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.[71]
 * @type {Number}
 */
export const CERT_ERROR = 495;

/**
 * No Cert (Nginx)
 *
 * Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an error page redirection.[72]
 * @type {Number}
 */
export const NO_CERT = 496;

/**
 * HTTP to HTTPS (Nginx)
 *
 * Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.[73]
 * @type {Number}
 */
export const HTTP_TO_HTTPS = 497;

/**
 * Token expired/invalid (Esri)
 *
 * Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.[74]
 * @type {Number}
 */
export const TOKEN_EXPIRED_INVALID = 498;

/**
 * Client Closed Request (Nginx)
 *
 * Used in Nginx logs to indicate when the connection has been closed by client while the server is still processing its request, making server unable to send a status code back.[75]
 * @type {Number}
 */
export const CLIENT_CLOSED_REQUEST = 499;

/**
 * Token required (Esri)
 *
 * Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).[74]
 * @type {Number}
 */
export const TOKEN_REQUIRED = 499;

/**
 * Internal Server Error
 *
 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.[78]
 * @type {Number}
 */
export const INTERNAL_SERVER_ERROR = 500;

/**
 * Not Implemented
 *
 * The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).[79]
 * @type {Number}
 */
export const NOT_IMPLEMENTED = 501;

/**
 * Bad Gateway
 *
 * The server was acting as a gateway or proxy and received an invalid response from the upstream server.[80]
 * @type {Number}
 */
export const BAD_GATEWAY = 502;

/**
 * Service Unavailable
 *
 * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.[81]
 * @type {Number}
 */
export const SERVICE_UNAVAILABLE = 503;

/**
 * Gateway Timeout
 *
 * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.[82]
 * @type {Number}
 */
export const GATEWAY_TIMEOUT = 504;

/**
 * HTTP Version Not Supported
 *
 * The server does not support the HTTP protocol version used in the request.[83]
 * @type {Number}
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;

/**
 * Variant Also Negotiates (RFC 2295)
 *
 * Transparent content negotiation for the request results in a circular reference.[84]
 * @type {Number}
 */
export const VARIANT_ALSO_NEGOTIATES = 506;

/**
 * Insufficient Storage (WebDAV; RFC 4918)
 *
 * The server is unable to store the representation needed to complete the request.[17]
 * @type {Number}
 */
export const INSUFFICIENT_STORAGE = 507;

/**
 * Loop Detected (WebDAV; RFC 5842)
 *
 * The server detected an infinite loop while processing the request (sent in lieu of 208 Already Reported).
 * @type {Number}
 */
export const LOOP_DETECTED = 508;

/**
 * Bandwidth Limit Exceeded (Apache bw/limited extension)[85]
 *
 * This status code is not specified in any RFCs. Its use is unknown.
 * @type {Number}
 */
export const BANDWIDTH_LIMIT_EXCEEDED = 509;

/**
 * Not Extended (RFC 2774)
 *
 * Further extensions to the request are required for the server to fulfil it.[86]
 * @type {Number}
 */
export const NOT_EXTENDED = 510;

/**
 * Network Authentication Required (RFC 6585)
 *
 * The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).[61]
 * @type {Number}
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;

/**
 * Unknown Error
 *
 * This status code is not specified in any RFC and is returned by certain services, for instance Microsoft Azure and CloudFlare servers: "The 520 error is essentially a “catch-all” response for when the origin server returns something unexpected or something that is not tolerated/interpreted (protocol violation or empty response)."[87]
 * @type {Number}
 */
export const UNKNOWN_ERROR = 520;

/**
 * Origin Connection Time-out
 *
 * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal that a server connection timed out.
 * @type {Number}
 */
export const ORIGIN_CONNECTION_TIMEOUT = 522;

/**
 * Network read timeout error (Unknown)
 *
 * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.[citation needed][88]
 * @type {Number}
 */
export const NETWORK_READ_TIMEOUT = 598;

/**
 * Network connect timeout error (Unknown)
 *
 * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.[citation needed][89]
 * @type {Number}
 */
export const NETWORK_CONNECT_TIMEOUT_ERROR = 599;
