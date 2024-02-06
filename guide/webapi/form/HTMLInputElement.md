# HTMLInputElement

EventTarge <- Node <- Element <- HTMLElement <- HTMLInputElement

## Properties Related to parent form

* form: HTMLFormElement
* formAction: string

Returns/sets the element's `formaction` attribute

* formEncType: string
* formMethod: String
* formNoValidate: Boolean
* formTarget: string

## Properties that apply to any type of input element that is not hidden

* `name`: string

Returns/Sets the element's `name` attribute, containing a name that identifies the element when submitting the form.

* `type`: string, 

Returns/Sets the element's `type` attribute, indicating the type of control to display.

* `disabled`: boolean

Returns/Sets the disabled attribute.
The input values will not be submitted with the form

* `autofocus`: boolean, 

Get/Set the `autofocus` attribute

* `required`: boolean

Get/Set the element's required attribute.

`value`: string

Get/Set the current value of the control.
If the user enters a value different from the value expected, this may return an empty string.

`validity`: ValidityState

Returns the element's current validity state
validateMessage: string

`willValidate`: Boolean

Properties that apply only to checkbox or radio

`checked`: boolean

Get/Set the current state of the element when type is checkbox or radio
defaultChecked: Boolean

Get/Set the default state of a radio button or checkbox

`indeterminate`: boolean

Returns whether the checkbox or radio button is in indeterminate state.

Properties that apply only to image

`alt`: string
`height`: string
`src`: string
`width`: string

## Properties that apply only to file

`accept`: string
`files`: FileList

## Properties that apply only to text/number containg elements

`autocomplete`: string
`max`: string
`maxLength`: long
`min`: string
`minLength`: long
`pattern`: string
`placeholder`: string
`readonly`: boolean

This is ignored if the value of the `type` attribute is `hidden`, `range`, `color`, `checkbox`, `radio`, `file` or a button

`selectionStart`: unsigned long
`selectionEnd`: nsigned long
`selectionDirection`: string
`size`: unsigned long

