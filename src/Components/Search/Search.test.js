import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Route><Search /></Route></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});