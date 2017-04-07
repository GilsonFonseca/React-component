# React-component
An incrementer component with a controller attribute

This component is a incrementer component, where you set the attribute and give it a state to make it work properly.
# USAGE
First download it with the command npm i increasing-counter
This is an example of usage:

import React from 'react';
import ReactDOM from 'react-dom';
import IncreasingCounter from './App';
import './index.css';

ReactDOM.render(
  <IncreasingCounter ativo={true} valorInicial={1} />,
  document.getElementById('root')
);

If you set ativo as true the counter will increase, but if you set false the counter will go to 0 and stop there.

#INFO

For more info you can go to [here](https://www.npmjs.com/package/increasing-counter)
