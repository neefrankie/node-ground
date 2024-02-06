# Select

## `<select>`

Permitted content: zero or more `<option>` or `<optgroup>`

Attributes

* `autofocus`: boolean
* `disabled`:  boolean
* `form`:      form owner
* `multiple`:  boolean
* `name`
* `required`:  boolean
* `size`:      number = 0

```html
<label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
    <option value="">--Please choose an option</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
</select>
```

It is given an `id` attribute be associated with a `<label>` for accessibility purposes, as well as a `name` attribute to represent the name of the associated data point submitted to the server. Each menu option is defined by an `<option>` element nested inside the `<select>`.

Each `<option>` element should have a `value` attribute containing the data value to submit to the server when that option is selected. If no `value` attribute is included, the value defaults to the text contained inside the element. You can include a `selected` attribute on an `<option>` element to make it selected by default when the page first loads.

## `<option>`

Used to define an item contained in a `<select>`, `<optgroup>` or a `<datalist>`.

Permitted content:
Text, possibly with escaped characters

Attributes

* disabled: boolean
* label:    string

The meaning of the option.

If omitted, its value is that of the element text content

* `selected`: boolean

If present, this Boolean attribute indicates that the option is initially selected.
value

The value to be submitted with the form.

If omitted, the value is the text content.
