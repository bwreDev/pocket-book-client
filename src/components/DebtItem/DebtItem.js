import React from 'react';
import moment from 'moment';
import './DebtItem.css';

export default function DebtItem(props) {
  const cleanDate = moment(props.input.date_added).format(
    'MMM Do YY, h:mm a'
  );

  return (
    <>
      <h4 className='debt-item'>{props.input.title}</h4>
      <p className='debt-amount'>${props.input.amount}</p>
      <p className='debt-description'> - {props.input.content}</p>
      <span className='debt-post-time'>
        {props.input.date_added ? cleanDate : ''}
      </span>
    </>
  );
}

DebtItem.defaultProps = {
  input: {},
};
