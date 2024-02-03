# Node.appendChild

```js
appendChild(aChild: Node): Node
```

Adds a node to the end of the list of children of a specified *parent* node.

If the argument references an existing node in the document, `appendChild()` moves from its current position to the new position.

If the given child is a DocumentFragment, the entire contents of the DocumentFragment are moved into the child list of the specified parent node.

Returns the newly appended node, or if the child is a DocumentFragment, the emptied fragment.

See also `Element.append()`

## Examples

```js
const paragraph = document.body.appendChild(document.createElement('p'));
```

Create a nested DOM structure:

```js
const fragment = document.createDocumentFragment();

const li = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
```

Generates:

```html
<section>
    <ul>
        <li>hello world</li>
    </ul>
</section>
```
