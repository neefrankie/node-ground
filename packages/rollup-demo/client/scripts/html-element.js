const element = document.getElementById('elt');
const out = document.getElementById('out');
const elementStyle = element.style;

// Loop through all styles. 
// for...of doesn't work with CSSStyleDeclaration.
for (const prop in elementStyle) {
  if (Object.hasOwn(elementStyle, prop)) {
    out.textContent += `${elementStyle[prop]} = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
