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

  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Pocket Book!</h1>
          <h2>Welcome Back!</h2>
        </header>
        <section className='income-section'>
          <h3>Income</h3>
          <ul>
            {this.context.inputs
              .filter((i) => i.title === 'income')
              .map((i) => (
                <li key={i.id}>
                  <IncomeItem input={i} />
                  <button
                    className='delete_incomes'
                    onClick={() => this.handleDelete(i.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
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
                    className='delete_debts'
                    onClick={() => this.handleDelete(i.id)}
                  >
                    X
                  </button>
                </li>
              ))}
          </ul>
        </section>
        <section className='savings-section'>
          <h3>Savings</h3>
          <span>
            Placeholder for you remaining income after debts.
          </span>
        </section>
      </>
    );
  }
}
