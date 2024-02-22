# Fetch API

```ts
fetch(
resource: string | Request,
options?: {
    method: string;
    
    headers: Headers;
    
    body: Blob | ArrayBuffer | TypedArray | DataView | FormData | URLSearchParams | string | ReadableStream;
    
    mode: cores | no-cores | same-origin;
    
    credentials: "omit" | "same-origin" | "include";
    // How the request will interact with the browser's HTTP cache.
    cache: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
    // How to handle a `redirect` response.
    // `follow`: automatically follow redirects. Unless otherwise stated the redirect mode is set to `follow`.
    // `error`: abort with an error if a redirect occurs.
    // `manual` Caller intends to process the response in another context.
    redirect: "follow" | "error" | "manual";
    
    referrer: string
    
    referrerPolicy: string;
    
    integrity: string;
    
    keepalive;
    
    signal;
    
    priority;
    
}
): Promise<Response>
```

A `fetch()` promise only rejects when a network error is encountered. It does not reject on HTTP errors (404, etc).

A `then()` handler must check the `Reponse.ok` and/or `Response.status`.

## Examples

```ts
const myImage = document.querySelector("img");
const myRequest = new Request("flowers.jpg");

fetch(myRequest)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        return response.blob();
    })
    then(response => {
        myImage.src = URL.createObjectURL(response);
    })
```

## Request

```ts
new Request(
input: string | Request,
options: {
    method: 'GET' | 'POST';
    headers: Headers | object;
    
    body: Blob | ArrayBuffer | TypedArray | DataView | FormData | URLSearchParams | string | ReadableStream';
    
    mode: 'cors' | 'no-cors' | 'same-origin' | 'navigate';
    
    credentials: omit | same-origin | include;
    
    cache: ,
    
    redirect : 'follow' | 'error' | 'manual';
    
    referrer: ;
    
    integrity: ;
}
)
```

```ts
var myRequest = new Request('flowers.jpg');

fetch(myRequest)
    .then(function(response) {
        return response.blob();
    })
    .then(function(response) {
        var objectURL = URL.createObjectURL(response);
        
        myImage.src = objectURL;
    });
```

## Response

### Instance Properties

* readonly `body`: ReadableStream
* readonly `bodyUsed`: boolean
* readonly `headers`: Headers
* readonly `ok`: boolean, status in 200-299
* readonly `redirected`: boolean

Whether or not the response is the result of a request you made which was redirected.

* `status`: number
* `statusText`: string
* `type`: basic | cors
* `url`: string

The final URL obtained after any redirects.

### Instance Method

* `arrayBuffer(): Promise(ArrayBuffer)`
* `blob(): Promise(Blob)`
* `clone(): Response`
* `formData(): Promise(FormData)`
* `json(): Promise(JSON)`
* `text(): Promise<string>`

### Fetch an Image

```ts
const image = document.querySelector(".my-image");

fetch("flowers.jpg")
    .then(res => res.blob())
    .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        image.src = objectURL;
    })
```

### JSON

```ts
const doAjax = async () => {
    const resp = await fetch("Ajax.php");
    
    if (resp.ok) {
        const jsonValue = await response.json();
        
        return Promise.resolve(jsonValue);
    } else {
        return Promise.reject("")
    }
}

doAjax().then(console.log).catch(console.log)
```

### Redirect

In request:

```ts
{
    redirect: 'follow'
}
```

In response:

```ts
if (response.redirected) {
    window.location.href = response.url;
}
```

### Detecting redirects

The `url` property returns the final URL after redirects.

```ts
fetch(awesome-picture.jpg)
    .then((response) => {
        const elem = document.getElementById('warning-message-box');
        
        elem.textContext = response.redirected ? "Unexpected redirect" : "";
        
        console.log(response.url);
        
        return response.blob();
    })
```

### Disallowing redirects

```ts
fetch("awesome-picture.jpg", { redirect: "error" })
    .then((response) => response.blob())
    .then()
```

## Headers

An object implementing Headers can directly be used in a for…of:

```ts
for (var p of myHeaders)
```

is equivalent to 

```ts
for (var p of myHeaders.entries())
```

```ts
new Headers(
    init: object | Array
)
```

init could be:

* a simple object literal with string values
* an array of name-value pairs, where each pair is a 2-element string array
* an existing Headers object.

```ts
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type');

var myHeaders = new Headers({
    'Content-Type': 'image/jpeg',
    'X-My-Custom-Header': 'Zeke are cool'
})

var myHeaders = new Headers([
    ['Set-Cookie', 'greeting=hello'],
    ['Set-Cookie', 'name=world']
]);
```

### Methods

* append(name, value)
* delete(name)
* get(name): string
* has(name): boolean
* set(name, value)
* entries(): iterator
* keys(): iterator
* values()
