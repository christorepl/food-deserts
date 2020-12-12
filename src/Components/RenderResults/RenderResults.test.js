import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import RenderResults from './RenderResults';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Route><RenderResults /></Route></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});