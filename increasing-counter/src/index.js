import React from 'react';
import ReactDOM from 'react-dom';
import IncreasingCounter from './App';
import './index.css';

ReactDOM.render(
  <IncreasingCounter ativo={true} valorInicial={1} />,
  document.getElementById('root')
);
