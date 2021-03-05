import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import UserSaves from './UserSaves';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < BrowserRouter > < Route path = "saved-search" > < UserSaves / > < /Route></BrowserRouter > , div);

  ReactDOM.unmountComponentAtNode(div);
});