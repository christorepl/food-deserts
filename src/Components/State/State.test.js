import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import State from './State';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Route><State /></Route></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});