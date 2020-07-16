import React from 'react';
import ReactDOM from 'react-dom';
import DebtItem from './DebtItem';
import renderer from 'react-test-renderer';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DebtItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer.create(<DebtItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
