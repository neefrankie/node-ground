# Input Event

Event <- UIEvent <- InputEvent

Fired synchronously when the value of an `input`, `select` or `textarea` element is changed.

For `input` elements with `type=checkbox` or `type=radio`, the `input` event should fire when a user toggles the control, but this is not the case. Use `change` event instead for elements of these types.

```ts
interface InputEvent extends UIEvent {
    readonly data: string | null;
    readonly dataTransfer: DataTransfer | null;
    readonly inputType: string;
    readonly isComposing: boolean;
    getTargetRanges(): StaticRange[];
}
```

## Properties

* data: Read only. Returns a DOMString with the inserted characters. This may be an empty string if the change doesn't insert text.
* dataTransfer: Readonly
* inputType: Read only
* isComposing: boolean, read only

## Methods

* getTargetRanges()
