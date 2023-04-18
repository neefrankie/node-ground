import { createRoot } from 'react-dom/client';

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    }
  }
}

const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
);

const root = createRoot(document.getElementById("root"));

root.render(element);
