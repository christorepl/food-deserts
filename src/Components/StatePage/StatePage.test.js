import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import StatePage from './StatePage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route path = "/state/11" > < StatePage / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});