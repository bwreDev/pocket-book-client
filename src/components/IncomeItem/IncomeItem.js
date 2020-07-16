import React from 'react';
import moment from 'moment';
import './IncomeItem.css';

export default function IncomeItem(props) {
  const cleanDate = moment(props.input.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <div className='income-item'>
      <p className='income-amount'>${props.input.amount}</p>
      <p className='income-description'>{props.input.content}</p>
      <span className='income-post-time'>
        {props.input.date_added ? cleanDate : ''}
      </span>
    </div>
  );
}

IncomeItem.defaultProps = {
  input: {},
};
