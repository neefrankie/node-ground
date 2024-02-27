# File Upload

## File

`File`接口包含文件信息。一半从`FileList`获取，`FileList`来自

* `<input type="file">`
* `DataTransfer`的拖拽

`File`是`Blob`的一个具体类别，可以用在任何可以使用Blob的地方。如：

* `FileReader`
* `URL.createObjectURL()`
* `createImageBitmap()`
* `fetch()`的`body`选项
* `XMLHttpRequest.send()`

示例：

* [Uploading a file](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file)
* [Using fiels from web applications](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications)

### File Constructor

```js
new File(fileBits: iterable, fielName: string)
new File(fileBits: iterable, fileName: string, options)
```

Options:

* `type?: string` MIME type
* `endings?: transparent | native`
* `lastModified?: number` default `Date.now()`

```js
const file = new File(["foo"], "foo.txt", {
    type: "text/plain",
});
```

### File Instance Properties

继承`Blob`接口.

* `readonly lastModified`
* `readonly name`: the name of the file referenced by the File object.
* `readonly size`
* `readonly type`

## FileList

`HTMLInputElement.files`返回的对象.

* `readonly length` 列表中的文件数
* `readonly item(index: number): File`

## Input File

```html
<input type="file">
```

Upload to a server using form submission, or manipulated using the File API.

### Events

* `change`
* `input`

### Attributes

* `required`
* `accept`

Defines the file types the file input should accept.

Example for Word files:

```html
<input
    type="file"
    id="docpicker"
    accept=".doc,.docx,application/msword,application/vnd.openxmlformat-officedocument.wordprocessingml.document"
>
```

* `capture`

A string specifies which camera to use for capture of image or video data.

A value of `user` indicates that the user-facing camera and/or microphone should be used.

A value of `environment` specifies that the outward-facing camera and/or microphone should be used.

* `multiple: bool` Allow user to select more than one file.

* `value`

A file input's `value` attribute contains a string that represent the path to the selected files. if no file is selected yet, the value is an empty string.

When selected multiple files, the `value` represents the first file in the list of files they selected. The other files can be identified using the input's HTMLInputElement.files property.

### Methods

* `select()`

### Unique file type specifiers

A unique file type specifier is a string that describes a type of file that may be selected by the user in an `<input>` element of type file.

Each unique file type specifier may take one of the following forms:

* A valid case-insensitive filename extension, starting with a period character: `.jpg`, `.pdf` or `.doc`
* A valid MIME type string, with no externsions
* `audio/*` meaning any audio file
* `video/*` meaning any video file
* `image/*` meaning any image file.

The `accept` takes a string containing one or more of these unique file type specifiers as its value, separated by commas.

### Accessing selected files on a change event

```js
inputElement.addEventListener('change', () => {
    const fileList = this.files;
    
}, false)
```

### Getting information on selected files

The selected files are returned by the element's HTMLInputElement.files property, which is a FileList object containing a list of File objects. The FileList behaves like an array, so you can check its `length` property to get the number of selected files.

Individual File object can be retrieved by accessing the list as an array:

```js
for (let i = 0, numFile = fileList.length; I < numFile; i++) {
    const file = fileList[i];
}
```

Each File object contains the following information:

* `name`: the file's name
* `lastModifier`: unix timestamp in milliseconds.
* `size`: the size of the file in bytes
* `type`: the file's MIME type.

## Selecting files using drag and drop

First establish a drop zone.

The drop event is fired when an element or text selection is dropped on a valid drop target.

### DragEvent

Event <- UIEvent <- MouseEvent <- DragEvent

#### Properties

* `readonly dataTransfer`: DataTransfer

### DataTransfer

Hold the data that is being dragged during a drag and drop operation.

* dropEffect
* effectAllowed
* files
* readonly items: DateTransferItemList
* readonly types: string[]
* clearData()
* getDate()
* setData()
* setDragImage()
