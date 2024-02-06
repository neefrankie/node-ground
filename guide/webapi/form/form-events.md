# Form Events

## reset

The reset button is pressed

## submit

Fires when a `<form>` is submitted.

Not that the `submit` event fires on the `<form>` element itself, not on any `<button>` or `<input type="submit">` inside it.

## focus

## blur

## Value Change Events

### `input: InputEvent`

Fires when the value of an `<input>`, `<select>` or `<textarea>` element has been changed.

For `<input>` elements with `type=checkbox` or `type=radio`, the `input` event should fire whenever a user toggles the control. You can use the `change` evne instead for elements of these types.

### `change`

The `change` event is not necessarily fired for each alteration to an elment's `value`.


2 scenarios:

* Fired for `input`, `select`, `textArea` elements when a change to the element's value is committed by the user. Unlike `input` event, the `change` event is not necessarily fired for each change to an element's value
* Fired at AudioTrackList, VideoTrackList, and TextTrackList objects when one or more of hte object's tracks are enabled or disabled.

Depending on the kind of form element being changed and the way the user interacts with the element, the `change` event fires at a different moment:

* When the element is `:checked` for `input type=radio` and `input type=checkbox`.
* When the user commits the change explicitly;
* When the element loses focus after its value was changed, but not commited. e.g. after editing the value of `textarea` or `input type=text`

## React Change Event Type

```ts
React.ChangeEvent<HTMElement>
```
