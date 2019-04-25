function createElement(el, props, children) {
  const element = document.createElement(el);

  props &&
    Object.keys(props).forEach((prop) => {
      if (typeof props[prop] === 'object') {
        let firstProp = Object.keys(props);
        let myObject = props[prop];
        Object.keys(myObject).forEach((secondProp) => {
          element[firstProp][secondProp] = myObject[secondProp];
        });
      } else {
        element[prop] = props[prop];
      }
    });

  if (children instanceof Array) {
    children.forEach((child) => {
      if (typeof child === 'object') {
        element.appendChild(child);
      } else {
        element.innerHTML += child;
      }
    });
  } else if (typeof children === 'string') {
    element.innerHTML = children;
  }
  return element;
}

function render(el, domEl) {
  return domEl.appendChild(el);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
