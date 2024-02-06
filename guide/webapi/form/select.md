# Select

## `<select>`

```html
<label for="pet-select">Choose a pet:</label>

<select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
```

Attributes

* `autofocus`: boolean
* `disabled`:  boolean
* `form`:      form owner
* `multiple`:  boolean
* `name`
* `required`:  boolean
* `size`:      number = 0

Permitted content: zero or more `<option>` or `<optgroup>`

Each `<option>` element should have a `value` attribute containing teh data value to submit to the server. If no `value` attribute is included, the value defaults to the text contained inside the element. Include a `selected` attribute on an `<option>` to make it selected by default.

Nest `<option>` inside `<optgroup>` to create separate groups of options. Inlucde `<hr>` to create separators that add visual breaks between options.

## `<option>`

Used to define an item contained in a `<select>`, `<optgroup>` or a `<datalist>`.

Permitted content:
Text, possibly with escaped characters

Attributes

* `disabled`: boolean
* `label`:    string

The meaning of the option.

If omitted, its value is that of the element text content

* `selected`: boolean

If present, this Boolean attribute indicates that the option is initially selected.
value

The value to be submitted with the form.

If omitted, the value is the text content.

## DOM Interface

### HTMLSelectElement

`EventTarget` <- `Node` <- `Element` <- `HTMLElement` <- `HTMLSelectElement`

Instance properties

* `disabled: boolean`
* `readonly form: HTMLFormElement`
* `readonly labels: NodeList`
* `readonly options: HTMLOptionsCollection`
* `selectedIndex: long`
* `readonly selectedOptions: HTMLCollection`
* `readonly type: string`: `select-one` | `multiple`

Instance methods

* `add()`
* `checkValidity()`
* `item()`
* `namedItem()`
* `remove()`
* `setCustomValidity()`
* `showPicker()`

Events

* `change`

```html
<select class="ice-cream" name="ice-cream">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardine">Sardine</option>
    <option value="vanilla">Vanilla</option>
</select>
```

```js
const selectElement = document.querySelector(".ice-cream");
const result = document.querySelector(".result");

selectElement.addEventListener("change", (event) => {
  result.textContent = `You like ${event.target.value}`;
});
```

* `input`
