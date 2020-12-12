import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import RenderSaveResults from './RenderSaveResults';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><Route><RenderSaveResults /></Route></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});