import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Route><NavBar /></Route></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});