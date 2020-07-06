import React from 'react';
import moment from 'moment';
import './DebtItem.css';

export default function DebtItem(props) {
  /*const cleanDate = moment(props.debt.date_added).format(
    'MMM Do YY, h:mm a'
  );*/

  return (
    <>
      <h4 className='debt-item'>{/*props.debt.content*/}</h4>
      <span className='debt-post-time'>
        {/*props.debt.date_added ? cleanDate : ''*/}
      </span>
    </>
  );
}

DebtItem.defaultProps = {
  input: {},
};
