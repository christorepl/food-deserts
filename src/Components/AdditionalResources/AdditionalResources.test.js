import React from 'react';
import ReactDOM from 'react-dom';
import AdditionalResources from './AdditionalResources';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<AdditionalResources />, div);

  ReactDOM.unmountComponentAtNode(div);
});