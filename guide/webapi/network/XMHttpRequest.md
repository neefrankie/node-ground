EventTarget <- XMLHttpRequestEventTarget <- XMLHttpRequest

```
const req = new XMLHttpRequest()

req.addEventListener('load', () => {
    console.log(this.responseText);
});

req.open("GET", "http://www.example.org/example.txt");

req.send();
```

## Properties


### readonly readyState: number

• 0: UNSENT
• 1: OPENED
• 2: HEADERS_RECEIVED
• 3: LOADING
• 4: DONE


### readonly response

The response's body conternt as an:

ArrayBuffer | Blob | Document | object | string

An appropriate object based on the value of `responseType`.

You can set the value of `responseType` after `open()` and before `send()`.

### readonly responseXML

Document | null

### readonly responseText

string | null

### responseType

An enumerated string value specifying the type of data contained in the response.

```
"" | 
"arraybuffer" | 
"blob" | 
"document" | 
"json" | 
"text"
```

"" is the same as `text`, the default type

    • readonly reponseURL: string


    • readonly status: number

The response status code

    • readonly statusText: string

    • timeout: number (milliseconds)

    • readonly upload

    • withCredentials: boolean

## Methods

    • abort()
    • getAllResponseHeaders(): string | null
    • getReponseHeader(): string | null

    • open()

```
open(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: string,
    async: boolean = true,
    user: string | null,
    password: string | null,
) => void;
```

    • overrideMimeType()

    • send()

```
send(
    body: Document | XMLHttpRequestBodyInit | null
) => void;

XMLHttpRequestBodyInit: 
    Blob | 
    ArrayBuffer | 
    TypedArray | 
    DataView | 
    FormData | 
    URLSearchParams | 
    string | 
    object
```

    • setRequestHeader()

Sets the value of an HTTP request header.

Must be called before `send()` and after `open()`

```
setRequestHeader(
    header: string,
    value: string,
)
```

## Events

### abort: ProgressEvent

### error: ProgressEvent

### load

Fired when an XHLHttpRequest transaction completes successfully.

```
addEventListener('load', (event: ProgressEvent) => {

});
```

### loadend

### loadstart

### progress

Fired periodically when a request receives more data.

```
addEventListener('progress', (event: ProgressEvent) => {

});
```

### readystatechange

### timeout

## ProgressEvent: Event

Measure progress of an underlying process.


• readonly lengthComputable: boolean

• readonly loaded: int

The amount of work already performed by the underlying process.

• readonly total: int

The total amount of work that the underlying process is in the progress of performing.


```
req.addEventListener('progress', (event) => {
    if (event.lengthComputable) {
        progressBar.max = event.total
        progressBar.value = event.loaded
    }
});
```

## Handling reponses

### responseXML

A DOM object containing a parsed XML document.

To analyze this XML document:

    1. Use XPath to address parts of it.
    2. Manually Parsing and serializing XML to strings or objects
    3. Using XMLSerializer to serialize DOM trees to strings to to files.
    4. RegExp

### responseText

To get the content of a remote HTML webpage, the `responseText` property is a string containing the raw HTML.

To parse this raw HTML string:

    1. Use the responseXML property
    2. Inject the content into the body of a document fragment via fragment.body.innerHTML
    3. RegExp

## Handling binary data

## Monitoring progress

```
const req = new XMLHttpRequest();

req.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
        const percentComplete = e.loaded / e.total * 100
    }
});
```

## Submitting forms and uploading files


