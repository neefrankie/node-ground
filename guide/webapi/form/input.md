# input

Global Attributes

type
accept
autocomplete
capture
checked
disabled: Boolean
        Indicates the form control is not available for interaction. The `click` event will not be dispatched on disabled controls.
        A disabled control's value isn't submitted with the form.
form
formaction
formenctype
formmethod
formnovalidate
formtarget
height
list
max
maxlength
min
minlength
name: string

A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

If an input has no `name` specified, or `name` is empty, the input's value is not submitted with the form.

The name attribute creates a unique behavior for radio buttons. Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselected any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted.
pattern
placeholder
readonly
        Indicates the user cannot modify the value of the control.
        
        The value will be submitted with the form.
        
Ignored for type:
        hidden
        range
        color
        checkbox
        radio
        file
        button
required
value



Types

button
checkbox
color
date

The resulting value includes the year, month, and day, but not the time.

The value is a DOMString formatted according to ISO8601.

```
<input type="date" value="2017-06-01">
```

You can get and set the date value in JS with the input element's `value` and `valueAsNumber` properties.

Additional attributes:

        • max
        • min
        • step
time

Let the user to enter a time (hours, minutes, and optinally seconds).

The value is a DOMString. You can set a default value for the input by including a valid time in the `value` attribute:

```
<input value="13:30">
```

Format

The value of the time input is always in 24-hour format that includes leading zeros: `hh:mm`. If the time includes seconds, the format is always `hh:mm:ss`.

Additional attributes
        • list
        • max
        • min
        • readonly
        • step: the value is given in seconds, with a scaling factor of 1000.
datetime-local

The control is intended to simply represent a local date and time, not necessarily the user's local date and time.

The value is a DOMString.

```
<input type="datetime-local" value="2017-06-01T08:30">
```
email
file
hidden
image
month
number
password
radio

Generally used in radio groups: collection of radio buttons describing a set of related options. Only one radio button in a given group can be selected at the same time.

```html
<div class="form-check">
    <input type="radio" 
        id="huey" 
        name="drone" 
        value="huey"
        checked>
    <label for="huey">Huey</label>
</div>

<div class="form-check">
    <input type="radio"
        id="dewey"
        name="drone"
        value="deway">
    <label for="deway">Deway</label>
</div>

<div class="form-check">
    <input type="radio"
        id="louie"
        name="drone"
        value="louie">
    <label for="louie">Louie</label>
</div>
```

range
reset
search
submit
tel
text
url
week
