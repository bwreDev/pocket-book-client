import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import IncomeItem from '../../components/IncomeItem/IncomeItem';
import DebtItem from '../../components/DebtItem/DebtItem';
import './UserPage.css';
import InputsContext from '../../contexts/InputsContext';
import PocketBookApiService from '../../services/pocket-book-api-service';

export default class UserPage extends Component {
  state = {
    start_date: new Date(),
  };

  static contextType = InputsContext;

  componentDidMount() {
    PocketBookApiService.getInputs().then((inputs) =>
      this.context.setInputs(inputs)
    );
  }

  handleDelete = (id) => {
    PocketBookApiService.deleteInput(id).then((res) => {
      this.componentDidMount();
    });
  };

  getTotal = (inputs) => {
    let total = 0;
    for (let i = 0; i < inputs.length; i++) {
      total = total + parseFloat(inputs[i].amount);
    }
    return total;
  };

  getSavings = (inputs) => {
    let savings = 0;
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].title === 'income') {
        savings += parseFloat(inputs[i].amount);
      }
      if (inputs[i].title === 'debt') {
        savings -= parseFloat(inputs[i].amount);
      }
    }
    return savings;
  };

  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Pocket Book!</h1>
          <h2>Welcome Back!</h2>
        </header>
        <section className='income-section'>
          <h3>Incomes</h3>
          <ul>
            {this.context.inputs
              .filter((i) => i.title === 'income')
              .map((i) => (
                <li key={i.id}>
                  <IncomeItem input={i} />
                  <button
                    className='delete_income'
                    onClick={() => this.handleDelete(i.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
          <h3>
            Total income: $
            {this.getTotal(
              this.context.inputs.filter((i) => i.title === 'income')
            )}
          </h3>
        </section>
        <section className='debt-section'>
          <h3>Debts</h3>
          <ul>
            {this.context.inputs
              .filter((i) => i.title === 'debt')
              .map((i) => (
                <li key={i.id}>
                  <DebtItem input={i} />
                  <button
                    className='delete_debt'
                    onClick={() => this.handleDelete(i.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
          <h3>
            Total debt: $
            {this.getTotal(
              this.context.inputs.filter((i) => i.title === 'debt')
            )}
          </h3>
        </section>
        <section className='savings-section'>
          <h3>Savings: $ {this.getSavings(this.context.inputs)}</h3>
        </section>
      </>
    );
  }
}
