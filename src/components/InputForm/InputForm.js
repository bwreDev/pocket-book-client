import React, { Component } from 'react';
import InputsContext from '../../contexts/InputsContext';
import PocketBookApiService from '../../services/pocket-book-api-service';
import Navbar from '../../components/Navbar/Navbar';
import './InputForm.css';

export default class InputForm extends Component {
  static contextType = InputsContext;

  state = {
    input_type: null,
  };

  onChange = (input) => {
    this.setState({
      input_type: input.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let eventObject = {
      title: this.state.input_type,
    };

    if (eventObject.title === 'income') {
      eventObject.content = event.target.description.value;

      eventObject.amount = event.target.amount.value;
    }
    if (eventObject.title === 'debt') {
      eventObject.content = event.target.description.value;

      eventObject.amount = event.target.amount.value;
    }

    PocketBookApiService.postInput(eventObject)
      .then(this.context.addInput)
      .then(this.props.history.push('/user'))
      .catch(this.context.setError);
  };

  render() {
    return (
      <>
        <Navbar />
        <h2>Please select income or debt.</h2>
        <form className='input-form' onSubmit={this.handleSubmit}>
          <h3>Type</h3>
          <select onChange={this.onChange} name='input_type'>
            <option value=''></option>
            <option value='income'>Incomes</option>
            <option value='debt'>Debts</option>
          </select>
          <fieldset className='amount'>
            <label htmlFor='amount'>
              <h3>Amount</h3>
            </label>
            <input placeholder='$0' type='number' name='amount' />
          </fieldset>
          <fieldset className='description'>
            <label htmlFor='description'>
              <h3>Description</h3>
            </label>
            <textarea
              placeholder='Describe your transaction'
              name='description'
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
