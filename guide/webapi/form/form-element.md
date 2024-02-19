# HTMLFormElement

HTMLFormElement -> HTMLElement -> Element -> Node -> EventTarget

Named inputs are added to their owner form instance as properties, and can overwrite native properties if they share the same name.

## Obtaining a form element object

To obtain an HTMLFormElement object, you can use a CSS selector with `querySelector()`, or you can get a list of all of the forms in the document using its `forms` property.

`Document.forms` returns an array of HTMLFormElement objects listing each of the forms on the page. You can then use the following syntaxes to get an individual form:

* `document.forms[index]`
* `document.forms[id]`
* `document.forms[name]`

## Properties

* `elements: HTMLControlsCollection`

Holding all form controls belonging to this form element.

* `length: long`

The number of controls in the form

* `name: DOMString`

The value of form's `name` HTML attribute

* `method: DOMString`

The value of the form's `method` HTML attribute

* `target: DOMString`

The value of the form's `target` HTML attribute, indicating where to display the results received from submitting the form.

* `action: DOMString`

The value of teh form's `action` HTML attribute, containing the URI of a program that processes the information submitted by the form.

* `encoding: DOMString`

* `enctype: DOMString`

The value fo the form's `enctype` HTML attribute, indicating the type of the content that is used to transmit the form to the server.

* `acceptCharset: DOMString`

The value of the form's `accept-charset` HTML attribute, represeting the character encoding that the server accepts.

* `autocomplete: DOMString`

* `noValidate: Boolean`

## Methods

* `submit()`
* `reset()`
* `checkValidity(): Boolean`
* `reportValidity(): Boolean`

## SubmitEvent

SubmitEvent -> Event

The `submit` event fires on the `<form>` element itself, not on any `<button>` or `<input type="submit">` inside it.

The `submit` event fires when the user clicks a `submit button`.

The event is not sent to the form when callling the `form.submit()` method directly.

```js
addEventListener("submit", (event) => {});
```

### Properties

* `readonly submitter`

### Examples

```js
function logSubmit(event) {
  log.textContext = `Form submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", logSubmit);
```

## HTML

Native submit button elements:

* `<button>` default type `submit`
* `<input type="submit">`
* `<input type="image">`
