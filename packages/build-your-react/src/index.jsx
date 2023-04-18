import { createRoot } from 'react-dom/client';

const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello"
  }
}

const root = createRoot(document.getElementById("root"));

root.render(element);
