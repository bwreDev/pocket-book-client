import React from 'react';
import ReactDOM from 'react-dom';
import IncomeItem from './IncomeItem';
import renderer from 'react-test-renderer';

it('should render without error', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IncomeItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer.create(<IncomeItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
