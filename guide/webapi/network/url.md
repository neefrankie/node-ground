# URL

## `URL`

### `URL.createObjectURL()`

创建一个字符串，这个字符串包含代表指定参数中对象的URL

`revokeObjectURL()`释放对象。

```js
URL.createObjectURL(object: File | Blob | MediaSource): string
```

## `URLSearchParams`

An object implementing URLSearchParams can directly be used in a `for…of` structure.

```js
for ( const [key, value] of mySarchParams) {}
for ( const [key, value] of mySearchParams.entries()) {}
```

## Constructor

```js
URLSearchParams(
    init?: 
        string|
        URLSearchParams |
        string[][]
        Record<string, string>
)
```

* string: parsed from application/x-www-form-urlencoded format. A leading `?` character is ignored.

Example:

```js
var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams(url.search);

var params2 = new URLSearchParams('foo=1&bar=2');

var params3 = new URLSearchParams(
    [
        ['foo', '1'],
        ['bar', '2']
    ]
);

var params4 = new URLSearchParams(
    {
        'foo': '1',
        'bar': '2'
    }
);
```

* append()

appends a specified key/value pair as a new search parameter.


```js
let params = new URLSearchParams('foo=1&bar=2')

params.append('foo', 4);

// foo=1&bar=2&foo=4
```

* set(name, value): void

Sets the values associated with a given search parameter to the given value. If there were several matching values, this method deletes the others. If the search parameter doesn't exist, this method creates it.
