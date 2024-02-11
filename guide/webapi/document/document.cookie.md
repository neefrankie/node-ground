# document.cookie

Read and write cookies.

## Syntax

```js
allCookies = document.cookie;
```

`allCookies` is a string containing a semicolon-separated list of all cookies.

Write a new cookie:

```js
document.cookie = newCookie;
```

You can only set/update a single cookie at a time using this method.

Any of the following cookie attribute values can optionally follow the key-value pair, each preceded by a semicolon separator:

* `;domain=example.com` The host to which the cookie will be sent. If not specified, this defaults to the host portion of the current document location. The domain must match the domain of the JS origin.

* `;expires=date-in-GMTString-format`. If neither `expires` nor `max-age` is specified, it will expire at the end of session.

* `;max-age=max-age-in-second` The max age of the cookie in seconds

* `partitioned` cookie should be stored using partitioned storage.

* `;path=path` the path that must exist in the requested URL for the browser to send the Cookie header.

* `;samesite=lax|strict|none`

* `;secure`

The cookie value string can use `encodeURIComponent()`.

Some user agent impl support the following cookie prefixes:

* `__Secure-`
* `__Host-`

## Examples

To work cross-origin:

```js
document.cookie = "name=oeschger; SameSite=None; Secure";

document.cookie = "favorite_food=tripe; SameSite=None; Secure";
```

Get a cookie:

```js
document.cookie = "test1=Hello; SameSite=None; Secure";

document.cookie = "test2=World; SameSite=None; Secure";

console.log(document.cookie);
// test1=Hello; test1=World

const cookieValue = document.cookie;

const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];
```

Check a cookie existence:

```js
document.cookie = "reader=1; SameSite=None; Secure";

document.cookie.split(";")
    .some((item) => item.trim().startsWith("reader="));
```
