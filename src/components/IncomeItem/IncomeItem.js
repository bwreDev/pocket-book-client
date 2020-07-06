import React from 'react';
import moment from 'moment';
import './IncomeItem.css';

export default function IncomeItem(props) {
  /*const cleanDate = moment(props.income.date_added).format(
    'MMM Do YY, h:mm a'
  );*/

  return (
    <>
      <h4 className='income-item'>{/*props.income.content*/}</h4>
      <span className='income-post-time'>
        {/*props.income.date_added ? cleanDate : ''*/}
      </span>
    </>
  );
}

IncomeItem.defaultProps = {
  input: {},
};
