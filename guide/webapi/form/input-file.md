# Input File

```html
<input type="file">
```

Upload to a server using form submission, or manipulated using the File API.

## Events

* change
* input

## Attributes

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

* multiple

Boolean attribute. Allow user to select more than one file.

* Value

A file input's `value` attribute contains a string that represent the path to the selected files. if no file is selected yet, the value is an empty string.

When selected multiple files, the `value` represents the first file in the list of files they selected. The other files can be identified using the input's HTMLInputElement.files property.

## Methods

* select()

## Unique file type specifiers

A unique file type specifier is a string that describes a type of file that may be selected by the user in an `<input>` element of type file.

Each unique file type specifier may take one of the following forms:

* A valid case-insensitive filename extension, starting with a period character: `.jpg`, `.pdf` or `.doc`
* A valid MIME type string, with no externsions
* `audio/*` meaning any audio file
* `video/*` meaning any video file
* `image/*` meaning any image file.

The `accept` takes a string containing one or more of these unique file type specifiers as its value, separated by commas.

## Accessing selected files on a change event

```js
inputElement.addEventListener('change', () => {
    const fileList = this.files;
    
}, false)
```

## Getting information on selected files

The selected files are returned by the element's HTMLInputElement.files property, which is a FileList object containing a list of File objects. The FileList behaves like an array, so you can check its `length` property to get the number of selected files.

Individual File object can be retrieved by accessing the list as an array:

```js
for (let i = 0, numFile = fileList.length; I < numFile; i++) {
    const file = fileList[i];
}
```

Each File object contains the following information:

• name: the file's name
• lastModifier: unix timestamp in milliseconds.
• size: the size of the file in bytes
• type: the file's MIME type.

### FileList

An object returned by HTMLInputElement.files.

Also used for a list of files dropped into web content when using the drag and drop API DataTransfer object.

• readonly length
• readonly item()

```html
<input id="myfiles" multipe type="file">

const fileInput = document.querySelector('#myfiles');
const files = fileInput.files;
const fileListLength = files.length;

for (let i = 0; i < fileListLength; i++) {
    console.log(files.item(i).name);
}
```

### File

Provide information about files and allow JS to access their content.

File objects are generally retrieved from a FileList object from <input> element, or from a drag and drop operation's DataTransfer object.

A File object is a specific kind of Blob, and can be used in any context that a Blob can.

• FileReader,
• URL.createObjectURL()
• createImageBitmap()
• XMLHttpRequest.send()

accepts both Blob and File

• readonly lastModified
• readonly name: the name of the file referenced by the File object.
• readonly size
• readonly type

## Selecting files using drag and drop

First establish a drop zone.

The drop event is fired when an element or text selection is dropped on a valid drop target.

## DragEvent

Event <- UIEvent <- MouseEvent <- DragEvent

### Properties

• readonly dataTransfer: DataTransfer

## DataTransfer

Hold the data that is being dragged during a drag and drop operation.

• dropEffect
• effectAllowed
• files
• readonly items: DateTransferItemList
• readonly types: string[]
• clearData()
• getDate()
• setData()
• setDragImage()
