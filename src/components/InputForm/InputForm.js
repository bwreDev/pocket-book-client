import React, { Component } from 'react';
//import EventsContext from '../../contexts/EventsContext';
//import BabyBookApiService from '../../services/baby-book-api-service';
import Navbar from '../../components/Navbar/Navbar';
//import moment from 'moment';
import './InputForm.css';

export default class InputForm extends Component {
  /*
  static contextType = EventsContext;

  state = {
    event_type: null,
  };

  onChange = (event) => {
    this.setState({
      event_type: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let eventObject = {
      title: this.state.event_type,
    };

    if (eventObject.title === 'diaper_changes') {
      eventObject.content = event.target.diaper_changes.value;
    }
    if (eventObject.title === 'feedings') {
      eventObject.content =
        event.target.feedings.value +
        ' ' +
        event.target.feeding_amount.value +
        ' ' +
        event.target.measurement.value;
    }
    if (eventObject.title === 'appointments') {
      eventObject.content =
        event.target.appointments.value +
        ' on - ' +
        moment(event.target.appointments_date.value).format(
          'MMM Do YY'
        );
    }
    if (eventObject.title === 'stretches') {
      eventObject.content = event.target.stretches.value;
    }

    BabyBookApiService.postEvent(eventObject)
      .then(this.context.addEvent)
      .then(this.props.history.push('/user'))
      .catch(this.context.setError);
  };
  */

  render() {
    return (
      <>
        <Navbar />
        <h2>Please select income or debt.</h2>
        <form className='input-form' onSubmit={this.handleSubmit}>
          <h3>Input type</h3>
          <select onChange={this.onChange} name='input_type'>
            <option value=''></option>
            <option value='incomes'>Incomes</option>
            <option value='debts'>Debts</option>
          </select>
          {/*this.state.input_type === 'incomes' ? (
            <fieldset className='incomes'>
              <label htmlFor='incomes'>
                <h3>Income</h3>
              </label>
              <input placeholder='$0' type='number' name='incomes' />
            </fieldset>
          ) : null}
          {this.state.input_type === 'debts' ? (
            <fieldset className='debts'>
              <label htmlFor='debts'>
                <h3>Debts</h3>
              </label>
              <h4>Type</h4>
              <input placeholder='$0' type='number' name='debts' />
            </fieldset>
          ) : null */}
          <fieldset className='incomes'>
            <label htmlFor='incomes'>
              <h3>Income</h3>
            </label>
            <input placeholder='$0' type='number' name='incomes' />
            <textarea
              placeholder='Type of income'
              name='incomes'
            ></textarea>
          </fieldset>
          <fieldset className='debts'>
            <label htmlFor='debts'>
              <h3>Debts</h3>
            </label>
            <input placeholder='$0' type='number' name='debts' />
            <textarea
              placeholder='Type of debt'
              name='debts'
            ></textarea>
          </fieldset>
          <button className='input-button' type='submit'>
            Save
          </button>
        </form>
      </>
    );
  }
}
