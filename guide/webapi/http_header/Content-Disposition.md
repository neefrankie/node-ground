# Content-Disposition

Response.

Indicating if the content is expected to be

* displayed inline in the browser, as a Web page or as part of a Web page;

* as an attachment, that is downloaded and saved locally.

In a multipart/form-data body, it is a header that must be used on each subpart of a multipart body to give information about the field it applies to. The subpart is delimited by the boundary defined in the `Content-Type` header.

## Syntax

### As a response header for the main body

The first parameter in the HTTP context is either `inline` or `attachment`.

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### As a header for a multipart body

A `multipart/form-data` body requires a `Content-Disposition` header to provide information for each subpart of the form (e.g. for every form field and any fiels that are part of the field data).

The first directive is always `form-data`. The header must also include a `name` parameter to identify the relevant field.

Additional directives are case-insensitive and have arguments that use quoted-string syntax after the `=` sign.

Multiple parameters are separated by a semicolon `;`.

```
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Directives

* `name`

is followed by a string containing the name of the HTML field in the form that the content of this subpart refers to. When dealing with multiple files in the same field, there can be several subparts with the same name.

* `filename`

is followed by a string containing the original name of the file transmitted. THe filename is always optional and must not be used blindly by the application: path information should be stripped, and conversion to the server file system rules should be done.

* `filename*`

The parameters `filename` and `filename*` differ only in that `filename*` uses the encoding defined in RFC 5987.

## Examples

A response triggering the `Save As` dialog:

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21
```

HTML form posted using the `multipart/form-data` format that makes use of the `Content-Disposition` header:

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boudary"

--boudary
Content-Disposition: form-data; name="field1"

value1
--boudary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boudary
```
