import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import SavedList from './SavedList';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route > < SavedList / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});