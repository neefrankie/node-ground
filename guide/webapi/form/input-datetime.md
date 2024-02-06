# Input Date Time

## input type="date"

The resulting value includes the year, month, and day, but not the time.

value: YYYY-MM-DD format, or empty

The date is formatted according to ISO8601

You can set a default value for the input with a date inside the value attribute:

```
<input type="date" value="2017-06-01">
```

The displayed date is formatted based on the locale of the user's brower, but the parsed value is always formatted yyyy-mm-dd.

You can get and set the date value in JS with the HTMLInputElement `value` and `valueAsNumber` properties:

```
var dateControl = document.querySelector('input[type="date"]');

dateControl.value = '2017-06-01';

console.log(dateControl.value); // 2017-06-01
console.log(dateControl.valueAsNumber); // 1496275200000
```

## input type="time"

```
<input value="13:30">
```

The value of a time input is always in 24-hour format that includes leading zeros: `hh:mm`, regardless of the input format.

If the time includes seconds, the format is always `hh:mm:ss`.
