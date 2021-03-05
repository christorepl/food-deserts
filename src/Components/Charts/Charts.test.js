import React from 'react';
import ReactDOM from 'react-dom';
import Charts from './Charts';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < Charts / > , div);

  ReactDOM.unmountComponentAtNode(div);
});