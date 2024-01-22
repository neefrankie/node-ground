# Express Response

## Send Data

### `res.locals`

### `res.json([body])`

### `res.jsonp(body)`

### `res.render(view, locals?, callback)`

### `res.send(body?)`

`body: Buffer | string | object | boolean | array`

### `res.sendStatus(code)`

Sets the reponse HTTP status code and sends the registered status message as the text reponse body.

### `res.status(code)`

Sets the HTTP status for the response.

```js
res.status(404).send('Bad Request');
```

### `res.sendFile`

## Header

### `res.headerSent`

### `res.get(field)`

Returns teh HTTP reponse header specified by `field`.

### `res.set(field, value)`

Sets teh reponse HTTP header field to value. To set multiple fields at once, pass an object as the parameter.

### `res.append(field, value)` 

Appends the specified value to the HTTP reponse header `field`.

### `res.attachment(filename?: string)` 

Sets the HTTP reponse `Content-Disposition` header field to `attachment`.

If a `filename` is given, it sets the `Content-Type` based on the extension name, and sets the `Content-Disposition: filname=xxx`:

```js
res.attachment('path/t0/logo.png');
// Content-Dispostion: attachment; filename="logo.png"
// Content-Type: image/png
```

### `res.location(path)`

### `res.redirect(status, path)`



## Cookie

* `res.cookie(name, value, options?)`

Options:

```js
{
    domain: string,
    encode: function,
    expires: Date,
    httpOnly: boolean,
    maxAge: number,
    path: string,
    priority: string,
    secure: boolean,
    signed: boolean,
    sameSite: boolean,
}
```

* `res.cleanCookie(name, options?)`
