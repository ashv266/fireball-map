import 'array.prototype.findindex';
import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.js';

main();

function main() {
  const hello = document.createElement('div');

  document.body.appendChild(hello);

  ReactDOM.render(<Hello />, hello);
}
