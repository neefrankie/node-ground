# Blob

类似文件的不可变对象，原始数据。可以以文本或二进制的格式读取，或者转换为`ReadableStream`.

* 从其他费blob对象和数据创建Blob: `Blob()`
* 从一个blob的一部分创建：`slice()`
* 文件系统中获取：`File`.

## Constructor

```js
new Blob(blobParts: iterable)
new Blob(blobParts: iterable, options?: {type: string, endings: 'transparent' | 'native'})
```

Example:

```js
const array = ['<q id="a"><span id="b">hey!</span></q>']; // an array consisting of a single string
const blob = new Blob(array, { type: "text/html" }); // the blob
```

## Properties

* `readonly size: number`
* `readonly type: string`

## Methoes

* `arrayBuffer(): Promise<ArrayBuffer>`
* `slice(): Blob`
* `stream(): ReadableStream`
* `text(): Promise<string>`

## Examples

Creating a blob:

```js
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
});
```

Creating a URL representing the contents of a typed array:

* Create typed array
* create a new blob containing the typed array's data
* call `URL.createdObjectURL()` to convert the blob into a URL


