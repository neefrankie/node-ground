# Send Form Data

Based on enctype:

* `application/x-www-form-urlencoded`. In JS handle it with `URLSearchParams`.
* `multipar/form-data`. In JS handle it with `FormData`

## HTML Form

## URLSearchParams

## FormData

The FormData object lets you compile a set of key/value pairs to send using the Fetch or XMLHttpRequest API.
It is primarily intended for use in sending form data, but can be used independently from forms in order to transmit keyed data.
The transmitted data is in teh same format that the form's submit() method would use to send the data if the form's encoding type were set to `multipart/form-data`.


Construct a set of key/value pairs representing form fields and their values, which can be sent using the `fetch()`, `XMLHttpRequest.send()` methods.

It uses the same format a form would use if the encoding type were set to `multipart/form-data`.

You can also pass it directly to the `URLSearchParams` constructor to generate query parameters in the way a form would do if it were using simple GET submission.

`FormData` can directly be used in a `for…of` structure.

## Constructor

```
new FormData(
	form?: HTMLFormElement,
	submitter?
)
```

	• `form`

An HTML <form> element. When specified, the `FormData` object will be populated with the form's current key/value using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

	• submitter

A submit button that is a member of the form.

## Examples

Creates an empty FormData:

```
const formData = new FormData();

// Add a key/value pair to it:
formData.append("username", "Chris");
```

Prepopulate from a HTML form element:

```
<form id="form">
	<input type="text" name="text1" value="foo">
</form>

const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");

const formData = new FormData(form, submitter);

for (const [key, value] of formData) {
	output.textContext += `${key}: ${value}\n`
}
```

	• append(name: string, value: string | Blob | File, filename?: string)
	• delete()
	• entries()
	• get()
	• getAll()
	• has()
	• keys()
	• set()
	• values()
