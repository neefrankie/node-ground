# FormData

Construct a set of key/value pairs representing form fields and their values, which can be sent using the `fetch()`, `XMLHttpRequest.send()` methods.

It uses the same format a form would use if the encoding type were set to `multipart/form-data`.

You can also pass it directly to the `URLSearchParams` constructor to generate query parameters in the way a form would do if it were using simple GET submission.

`FormData` can directly be used in a `for…of` structure.

## Constructor

```js
new FormData(
 form?: HTMLFormElement,
 submitter?
)
```

* `form`

An HTML `<form>` element. When specified, the `FormData` object will be populated with the form's current key/value using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

* submitter

A submit button that is a member of the form.

## Examples

Creates an empty FormData:

```js
const formData = new FormData();

// Add a key/value pair to it:
formData.append("username", "Chris");
```

Prepopulate from a HTML form element:

```html
<form id="form">
 <input type="text" name="text1" value="foo">
</form>
```

```js
const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");

const formData = new FormData(form, submitter);

for (const [key, value] of formData) {
 output.textContext += `${key}: ${value}\n`
}
```

## Methods

* `append()`

Appends a new value onto an existing key inside a `FormData`, or adds the key if it does not already exist.

```ts
append(name, value: string | Blob)
append(name, value, filename)
```

* delete()
* entries()

* `get()`

```ts
get(name: string): string | null
```

* `getAll()`

```ts
getAll(name: string): string[]
```

* `has()`

```ts
has(name: string): boolean
```

* keys()
* set()
* values()

## Convert to JSON

```js
Object.fromEntries(formData.entries());
```
