import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import SavePage from './SavePage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route exact path = "/saved-search/111" > < SavePage / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});