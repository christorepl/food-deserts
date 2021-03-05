import React from 'react';
import ReactDOM from 'react-dom';
import ChartsSave from './ChartsSave';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render( < ChartsSave / > , div);

  ReactDOM.unmountComponentAtNode(div);
});