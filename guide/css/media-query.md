# Media Query

Media queries allow you to apply CSS style depending on a device's

* media type (such as print vs. screen)
* features or characteristics such as screen resolution or orientation, aspect ratio, browser viewport witdth or height,
* user preference such as reduced motion, data usage, or transparency

Media queries are used for the following:

* conditionally apply style with `@media` and `@import`
* Target specific media for the `<style>`, `<link>`, `<source>` and other HTML element with the `media=` or `sizes=` attribute.
* Test and monitor media states using the `Window.matchMedia()` and `MediaQueryList.addListener()` JS methods.

## Syntax

A media query is composed of an optional *media type* and any number of *media feature* expressions.

Multiple queries can be combined in various ways by using logical operators.

A media query computes to true when the media type matches the device on which a document is being displayed and all media feature expressions compute as true.

Queries involving unknown media types are always false.

## Media types

Defines the broad category of device for which the media query applies:

* `all`
* `print`
* `screen`

The type is optional, assumed to be `all` except when using the `not` or `only` logical operators.

Targets printers:

```css
@media print {

}
```

Target multiple devices:

```css
@media screen, print {

}
```

## Media features

Media features describe specific characteristics of the user agent, output device, or environment.

Media feature expressions test for their presence or value, and are entirely optional.

Each media feature expression must be surrounded by parentheses.

```css
@media (max-width: 123450px) {…}
```

Apply styles only if the browser's viewport width is equal or narrower than `123450px`.

## Logical Operators

Used to compose a complex media query:

* `not`
* `and`
* `only`

You can also combine multiple media queries into a single rule by separating them with commas.

A media query computes to `true` when the media type matches t he device on the which a document is being displayed and all media feature expression compute as true.

Queries involving unknow media types are always false.

## Targeting media features

Apply styles when the user's primary input mechanism can hover over elements:

```css
@media (hover: hover) {

}
```

Media features are either range or discrete:

Discrete featurs take their value form an enumerated set of possible keyword values. For example, the descrete `orientation` feature accepts either `landscape` or `portrait`:

```css
@media print and (orientation: portrain) {

}
```

Man range features can be prefixed with `min-` or `max-` to express minimum condtion or maximum condition constraint.

Apply styles only if your browser's viewport width is equal to or narrower than 1250px:

```css
@media (max-width: 1250px) {

}
```

With media query range features, you can either use the inclusive `min-` and `max-` prefixes or the more concise range syntax operators `<=` and `=>`.

```css
@media (width <= 1250px) {

}
```

The following are equivalent:

```css
@media (min-width: 30em) and (max-width: 50em) {

}
@media (30em <= width <= 50em) {

}
```

If you create a media featur query without specifying a value, the nested styles will be used as long as the feature's value is not `0` or `none`.

```css
@media (color) {

}
```

## Creating complex media queries

### Combinng multiple types or features

```css
@media (min-width: 30em) and (orientation: landscape) {

}

@media screen and (min-width: 30em) and (orientation: landscape) {

}
```

### Testing for multiple queries

Use a comma-separated list of media queries to apply styles when the user's device matches any one of various media types, featurs, or states.

```css
@media (min-height: 680px), screen and (orientation: portrait) {

}
```

### Inverting a query's meaning

```css
@media not print {

}
```

The `not` negates only the media query it is applied to.
