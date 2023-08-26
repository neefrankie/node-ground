// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png';
// import Data from './data.xml';
// import Notes from './data.csv';
// import toml from './data.toml';
// import yaml from './data.yaml';
// import json from './data.json5';
// import Print from './print.js';
import { cube } from './math.js';

// console.log(toml.title);
// console.log(toml.owner.name);

// console.log(yaml.title);
// console.log(yaml.owner.name);

// console.log(json.title);
// console.log(json.owner.name);

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // element.classList.add('hello');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = Print.bind(nul, 'Hello webpack!');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);
  // element.appendChild(btn);

  // console.log(Data);
  // console.log(Notes);

  return element;
}

document.body.appendChild(component());

// function getComponent() {
//   return import('lodash')
//     .then(({ default: _}) => {
//       const element = document.createElement('div');
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
