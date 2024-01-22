# Cookie

## HTTP Request Header

Contains stored HTTP cookies associated with the server.

### Syntax

```
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

### Examples

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## HTTP Response Header

The `Set-Cookie` HTTP response header is used to send a cookie from the server to the user agent, so that the user agent can send it back to the server later.

To send multiple cookies, multiple `Set-Cookie` headers should be sent in the same response.

A simple cookie:

```
Set-Cookie: <cookie-name>=<cookie-value>
```

A pair of cookies:

```
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
```

Browser sends all cookies back to server:

```
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### Syntax

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expire=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

### Attributes

#### Define the lifetime of a cookie

Session cookies are deleted when the current session ends.

Permanent cookies are deleted at a date specified by the `Expires` attribute, or after a period of time specified by the `Max-Age` attribute.

```
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

When you set an `Expires` data and time, they're relative to the client the cookie is being set on, not the server.

#### Restrict access to cookies

* Secure
* HttpOnly

A cookie with the `Secure` attribute is only sent to the server with an encrypted request over HTTPS.

A cookie with the `HttpOnly` attribute is inaccessible to the JS `Document.cookie` API; it's only sent to the server. This helps mitigate cross-site scripting attacks.

```
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

#### Define where cookies are sent

The `Domain` and `Path` attributes define the scope of a cookie.

#### Domain

Specifies which hosts can received a cookie. Defaults to the same host that set the cookie, excluding subdomains.

If `Domain` is specified, then subdomains are always included. Therefore, specifying `Domain` is less restrictive than omitting it.

For example, if you set `Domain=mozilla.org`, cookies are available on subdomains like `developer.mozilla.org`

#### Path

A URL path that must exist in the requested URL in order to send the Cookie header.

For example, `Path=/docs`.

#### SameSite attribute

Let servers specify whether/when cookies are sent with cross-site request.

* `Strict`: requests from the cookie's origin site
* `Lax`: also sends the cookie when user navigates to the cookie's origin site
* `None`

Default `Lax`.

```
Set-Cookie: mykey=myvalue; SameSite=Strict
```

## Cookie JS API

The `Document` property `cookie` lets you read and write cookies associated with the document.

### Syntax

Read all cookies accessible from this location:

```js
allCookies = document.cookie;
```

`allCookies` is a string contaning a semicolon-separated list of all cookies. Each key/value may be surrounded by whitespace.

Write a new cookie:

```js
document.cookie = newCookie;
```

`newCookie` is a string of form `key=value`.

Any of the following cookie attribute values can optionally follow the key-value pair, each preceded by a semicolon separator:

* `;domain=domain`
* `;expires=date-in-GMTString-format`
* `;max-age=max-age-in-seconds`
* `;partitioned`
* `;path=path`
* `;samesite=lax | strict | none`

The cookie value string can use `encodeURIComponent()` to ensure that the string does not contain any commas, semicolons, or whitespace.

### Examples

```js
document.cookie = "name=oeschger; SameSite=None; Secure";
document.cookie = "favorite_food=tripe; SameSite=None; Secure";

function showCookies() {
 const output = document.getElementById("cookies");
 output.textContent = `${document.cookie}`;
}
```

Get a smple cookie:

```js
document.cookie = "test1=Hello; SameSite=None; Secure";
document.cookie = "test2=World; SameSite=None; Secure";

const cookieValue = document.cookie
	.split("; ")
	.find((row) => row.startsWith("test2="))
	?.split("=")[1];
```

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
```
