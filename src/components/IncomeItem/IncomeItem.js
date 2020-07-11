import React from 'react';
import moment from 'moment';
import './IncomeItem.css';

export default function IncomeItem(props) {
  const cleanDate = moment(props.input.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <>
      <h4 className='income-item'>{props.input.title}</h4>
      <h4 className='income-amount'>{props.input.amount}</h4>
      <span className='income-post-time'>
        {props.input.date_added ? cleanDate : ''}
      </span>
    </>
  );
}

IncomeItem.defaultProps = {
  input: {},
};
