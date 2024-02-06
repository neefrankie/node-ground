# Input Date Time

## `<input type="date">`

The resulting value includes the year, month, and day, but not the time.

The `time` adn `datetime-local` support time and date+time input.

value: YYYY-MM-DD format, or empty

The date is formatted according to ISO8601

You can set a default value for the input with a date inside the value attribute:

```html
<input type="date" value="2017-06-01">
```

The displayed date is formatted based on the locale of the user's brower, but the parsed value is always formatted `yyyy-mm-dd`.

You can get and set the date value in JS with the HTMLInputElement `value` and `valueAsNumber` properties:

```js
var dateControl = document.querySelector('input[type="date"]');

dateControl.value = '2017-06-01';

console.log(dateControl.value); // 2017-06-01
console.log(dateControl.valueAsNumber); // 1496275200000
```

### Addtional attributes

* `max`
* `min`
* `step`

### Handling broser support

With a text input, use `pattern` to trestrict input: `pattern="\d{4}=\d{2}-\d{2}"`

## `<input type="time">`

```html
<input value="13:30">
```

The value of a time input is always in 24-hour format that includes leading zeros: `hh:mm`, regardless of the input format.

If the time includes seconds, the format is always `hh:mm:ss`.

## `<input type="datetime-local">`

Always formatted `YYYY-MM-DDThh:mm`

### Setting timezones

You could privide the timezone ina `hidden` input type:

```html
<input type="hidden" name="timezone" value="-08:00">
```

Or use a `select` to list locations.
