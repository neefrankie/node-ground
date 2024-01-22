# Understanding CSRF

https://github.com/pillarjs/understanding-csrf

## How to mitigate CSRF attacks?

### Use only JSON APIs

There is no way for a simple `<form>` to send `JSON`.

### Disable CORS

Disable cros-origin requests.

If you're going to allow CORS, only allow it on `OPTIONS`, `HEAD`, `GET` as they are not supposed to have side-effects.

### Check the referrer header

### GET should not have side effects

### Avoid using POST

`<form>` can only `GET` and `POST`. By using other methods like `PUT`, `PATCH` and `DELETE`, an attacker has fewer methods to attach your site.

### Don't user method override

### Don't support old browsers

### CSRF

1. Server sends the client a token.
2. Client submits a form with the token
3. The server rejects the request if the token is invalid.

An attacher would have to somehow get the CSRF token from your site, and they would have to use JS to do so. Thus, if your site does not support CORS, then there's no way for the attacher to get the CSRF token.

Make sure CSRF tokens can not be accessed with AJAX.

The token just needs to be unguessable. It does not have to be cryptographically secure.

## Breach attack

CSRF tokens are generated on a per-request basis and different every time. But the server needs to know that any token included with a request is valid.
