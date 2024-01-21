# Content-Type

Representation header.

The original media type of the resource, prior to any content encoding applied for sending.

* Request. Used in methods such as `POST` and `PUT`. Tells the server what type of data is actually sent
* Response. Provides the client with the actual content type of the returned content in reponse to `Accept` header.

## Syntax

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## Directives

* `media-type` The MIME type of the resource of the data
* charset. The character encoding standard. Case insensitive, lowercase is preferred.
* `boundary`

For multipart entities the `boundary` directive is required. The directive consists of 1 to 70 characters from a set of character. It is used to encapsulate the boundaries of the multipart parts of the message. Often, the header boundary is prepended with two dashes and the final boundary has two dashes appended at the end.

## Examples

### Content-Type in HTML forms

In a POST request, resulting from an HTML form submission, the `Content-Type` of the request is specified by the `enctype` attribute of the `form` element:

```html
<form action="/" method="post" enctype="multipar/form-data">
    <input type="text" name="description" value="some text" />
    <input type="file" name="myFile" />
    <button type="submit">Submit</button>
</form>
```

The request looks like this:

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

The following `<form>`

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> Check</label>
  <label>
    Upload file: <input type="file" name="myFile" value="test.txt" />
  </label>
  <button>Send the file</button>
</form>
```

will send this message:

```
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### 
