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

  handleSubmit = (input) => {
    input.preventDefault();

    let inputObject = {
      title: this.state.input_type,
    };

    if (inputObject.title === 'income') {
      inputObject.content =
        input.target.income.value +
        ' ' +
        input.target.amount.value +
        ' ' +
        input.target.description.value;
    }
    if (inputObject.title === 'debt') {
      inputObject.content =
        input.target.debt.value +
        ' ' +
        input.target.amount.value +
        ' ' +
        input.target.description.value;
    }

    PocketBookApiService.postInput(inputObject)
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
            <option value='incomes'>Incomes</option>
            <option value='debts'>Debts</option>
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
