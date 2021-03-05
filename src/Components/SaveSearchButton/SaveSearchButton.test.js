import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import SaveSearchButton from './SaveSearchButton';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route > < SaveSearchButton / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});