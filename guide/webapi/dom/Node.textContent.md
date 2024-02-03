# Node.textCOntent

Represents the text content of the node and its descendants.

```js
textContent: string| null
```

* If the node is a document of a doctype, returns `null`.

• If the node is a `CDATA` section, comment, processing instruction, or text node, returns the text inside this node (nodeValue)

* For other node types, `textContent` returns the concatenation of the `textContent` of every child node, excluding comments and processing instructions. This is an empty string if the node has no children.

Setting this property on a node removes all its children and replaces them with a single text node with the given value.

## Difference from `innerText`

* `textContent` gets the content of all elements, including script and style elements. `innerText` only shows human-readable elements
* `textContent` returns every element in the node. `innerText` is aware of styling and won't return the text of hidden elements
* Since `innerText` takes CSS style into account, reading the value of `innerText` triggers a reflow, which can be computationally expensive.

## Difference from `innerHTML`

`innerHTML` returns HTML. `textContent` has better performance because its value is not parsed as HTML.

## Examples

```html
<div id="divA">
    This is <span>some</span> text!
</div>

let text = document.getElementById("divA")
    .textContent;
    
// 'This is some text!'

text.textContent = "This text is different!"
```
