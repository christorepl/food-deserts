import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import UserSavesTable from './UserSavesTable';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route path = "/state/11" > < UserSavesTable / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});