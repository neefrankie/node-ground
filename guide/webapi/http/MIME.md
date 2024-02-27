# MIME Types

## Syntax

```
type/subtype
```

* `type` The general category into which the data type falls, such as `video` or `text`.

* `subtype` The exact kind of data of the specified type of the MIME type represents.

An optional parameter can be added to provide additional details:

```
type/subtype;parameter=value
```

For example, for any MIME type whose main type is `text`, you can add the optional `charset` parameter to specify the character set used for the characters in the data.

To specify a UTC-8 text file, the MIME type `text/plain;charset=UTF-8` is used.

A MIME type is case-insensitive but traditionally is written all in lower case.

## Types

Two classes of type:

* descrete
* multipart

### Discrete types

Types which represent a single file or medium, such as a singl text or music file, or a single video.

#### `application`

Any kind of binary data that donesn't fall explicitly into one of the other types.

Generic binary data (or binary data whose tru type is unknown) is `application/octet-stream`.

Other common examples include:

* `application/pdf`
* `application/pkcs8`
* `application/zip`

#### `audio`

Audio or music data. Examples:

* `audio/mpeg`
* `audio/vorbis`

#### `font`

* `font/woff`
* `font/ttf`
* `font/otf`

#### `image`

* `image/jpeg`
* `image/png`
* `image/svg+xml`

#### `model`

* `model/vrml`

#### `text`

* `text/plain`
* `text/csv`
* `text/html`

#### `video`

* `video/mp4`

For text documents without specific subtype, `text/plain` should be used.

For binary documents without specific or known subtype, `application/octet-stream` should be used.

### Multipart types

Represents a document that's comprised of multiple component parts, each of which may have its own individual MIME type; or a multipart type may encapsulate multiple files being sent together in one transaction. For example, multipart types are used when attaching multiple files to an email.

A category of document broken into pieces, often with different MIME types. They can also be used to represent multiple, separate files which are all part of the same transaction.

There are two multipart types:

#### `message`

* `message/rfc882`
* `message/partial`

#### `multipart`

* `multipart/form-data`
* `multipar/byteranges`

## Important MIME types

* `application/octet-stream` Default for binary files
* `text/plain`
* `text/css`
* `text/html`
* `text/javascript`

### Image Types

* `image/gif`
* `image/png`
* `image/jpeg`
* `image/bmp`
* `image/webp`
* `image/svg+xml`

### Audio and Video Types

* `audio/wave`
* `audio/wav`
* `audio/x-wav`
* `audio/x-pn-wav`
* `audio/webm`
* `video/webm`
* `audio/ogg`
* `video/ogg`
* `application/ogg`

### `multipart/form-data`

Used when sending the values of a completed HTML Form from browser to server.

As a multipart document format, it consists of different parts, delimited by a boundary (a string starting with a double dash `--`). Each part is its own entity with its own HTTP headers, `Content-Disposition` and `Content-Type` for file uploading fields.

```
Content-Type: multipar/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

application/pkcs12
application/vnd.mspowerpoint
application/xhtml+xml
application/xml
application/pdf
application/x-www-form-urlencoded


application/json



