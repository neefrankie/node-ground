

/**
 * 
 * @param {*} type 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 * 
 * Transforms JSX element into:
 * 
 * const element = Didact.createElement(
 *   "div",
 *   { id: "foo" },
 *   Didact.createElement("a", null, "bar"),
 *   Didact.createElement("b")
 * );
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === 'object'
          ? child
          : createTextElement(child)
      }),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createDom(fiber) {
  // If the element type is TEXT_ELEMENT, create a text node
  // instead of a regular node.
  const dom = element.type == 'TEXT_ELEMENT'
    ? document.createTextNode("")
    : document.createElement(element.type);
  
  const isProperty = key => key !== 'children';

  // Assign the element props to the node.
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name];
    });
  
  return dom;
}

function render(element, container) {
  
  wipRoot = {
    dom: container,
    props: {
      children: [element]
    }
  };

  nextUnitOfWork = wipRoot;

  // element.props.children.forEach(child => {
  //   render(child, dom);
  // });

  // container.appendChild(dom);
}

let nextUnitOfWork = null;
let wipRoot = null;

function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }

  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    shouldYield = deadline.timeRemaining() < 1
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  // if (fiber.parent) {
  //   fiber.parent.dom.appendChild(fiber.dom);
  // }

  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;

  while (index < elements.length) {
    const element = elements[index];

    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }

  if (fiber.child) {
    return fiber.child;
  }

  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }

    nextFiber = nextFiber.parent
  }
}

const Didact = {
  createElement,
  render,
};

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a href='https://www.react.org'>bar</a>
    <b />
  </div>
)

const container = document.getElementById("root");
Didact.render(element, container);
