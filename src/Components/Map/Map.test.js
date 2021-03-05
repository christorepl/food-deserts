import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import Map from './Map';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route > < Map / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});