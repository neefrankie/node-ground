# Select

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

Each `<option>` element should have a `value` attribute containing teh data value to submit to the server. If no `value` attribute is included, the value defaults to the text contained inside the element. Include a `selected` attribute on an `<option>` to make it selected by default.

Nest `<option>` inside `<optgroup>` to create separate groups of options. Inlucde `<hr>` to create separators that add visual breaks between options.

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


