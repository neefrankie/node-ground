# Date

JS Date objects represent a single moment in time in a platform-independent format. `Date` objects contain an integer number that represents milliseconds since 1 January 1970 UTC.

## Date components and time zones

Two ways to interpret a timestamp:

* as a local time
* as a UTC

The local timezone is not stored in the datte object, but is determined by the host environment.

`getTimezoneOffset()` returns the difference between UTC and the local time in minutes.

There are two groups of `Date` methods:

* gets and set various date component by interperting the timestamp as a local time;
* others uses UTC.

Local:

* Year:          `getFullYear()`     | `setFullYear()`
* Month:         `getMonth()`        | `setMonth()`
* Date of month: `getDate()`         | `setDate()`
* Hours:         `getHours()`        | `setHours()`
* Minutes:       `getMinutes()`      | `setMinutes()`
* Seconds:       `getSeconds()`      | `setSeconds()`
* Milliseconds   `getMilliseconds()` | `setMilliseconds()`
* Day of week    `getDay()`          |

## Date format

Only specifies one form to be universally supported, a simplification of ISO8601:

```
YYYY-MM-DDTHH:mm:ss.sssZ
```

* `Z` timezone offset, which can either be the literal character `Z` or `+` or `-` followed by `HH:mm`, the offset in hours and minutes from UTC.

When the timezone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.

### Methods to format a date

* `toISOString()`
* `toString()`
* `toUTCString()`
* `toLocalDateString()`, `toLocalTimeString()` and `toLocalString()`

## Static Methods

Date.now(): number 

The number of milliseconds since epoch
Date.parse(): number

Parses a string representation of a date and returns the number of milliseconds since 1 Jan, 1970.

Parsing of strings with `Date.parse` is strongly discouraged.
Date.UTC(
        year: ,
        month?: int,
        day?: int,
        hour?: int,
        minute?: int,
        second?: int,
        millisecond?: int
): number

Returns the number of milliseconds since epoch.

## Constructor

Date objects can only be instantiated by calling `Date` as a constructor. It has no literal syntax.

new Date()

Creates a Date object for the current date and time according to system settings for timezone offset.
new Date(
        value: number
)

`value` is an integer representing the number of milliseconds since Epoch.
new Date(
        datestring: string
)

The string should be in a format recognized by the `Date.parse()` method (RFC2822 timestamps and also a version of ISO8601)

Parsing of data strings with the `Date` constructor is strongly discouraged.

Support for RFC 2822 format strings is by convention only.

Support for ISO8601 formats differs in that date-only strings (1970-01-01) are treated as UTC, no local.
new Date(
        year,
        monthIndex: number, // from 0
        day?: number = 1,
        hours?: number? = 0,
        minutes?: number = 0,
        seconds?: number = 0,
        milliseconds?: number = 0
)

`monthIndex` is 0-based.

The specified arguments represent local time.

If UTC is desired, use `new Date(Date.UTC(…))` with the same argument.

Missing values are set to 1 for day, or 0 for all others.


## Instance methods

getDate(): integer

1 - 31, day of month
getDay(): integer

0-6, day of week
local time
getFullYear(): integer

local time.
Four-digit number
getHours(): integer

local time
0 - 23
setHours(
        hoursValue: int, // 0 ~ 23
        minutesValue?: int, // 0 ~59
        secondsValue?: int, // 0 ~ 59
        msValue?: int, // 0 ~ 999
): number

Returns the milliseconds since epoch to the updated date.

If you do not specify the `minutesValue`, `secondsValue` and `msValue` parameters, the values returned from the `getMinutes()`, `getSeconds()` and `getMilliseconds()` methods are used.
getMilliseconds(): integer

local time
0-999
getMinutes(): integer

local time
0-59
getMonth(): integer

local time
0-11
getSeconds(): integer

local time
0-59
getTime(): integer

The number of milliseconds since epoch.
getTimezoneOffset(): integer

Returns the time zone difference, in minutes, from current locale to UTC.

The offset is positive if the local timezone if behind UTC and negative if it is ahead.

UTC-8 : 480
UTC+3 : -180

```
const x = new Date();
const currentTimeZoneOffsetInHours = x.getTimeZoneOffset();
```

To build ISO offset:

```
function isoOffset(date: Date): string {
        const offset = date.getTimezoneOffset();
        if (offset === 0) {
                return 'Z';
        }
        
        cost sign = offset <= 0
                ? '+'
                : '-';
                
        const hour = Math.floor(Math.abs(offset) / 60).toFixed();
        const minute = Math.abs(offset % 60).toFixed();
        
        return `${sign}${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`;
}
```

getUTCDate(): integer

Returns an integer, between 1 and 31, representing the day of month in the given date according to universal time
getUTCDay()

getUTCFullYear()

getUTCHours()

getUTCMilliseconds()

getUTCMinutes()

getUTCMonth()

getUTCSeconds()




