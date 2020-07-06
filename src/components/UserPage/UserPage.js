import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import IncomeItem from '../../components/IncomeItem/IncomeItem';
import DebtItem from '../../components/DebtItem/DebtItem';
import './UserPage.css';

export default class UserPage extends Component {
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
          <span>Placeholder for your total income.</span>
          <IncomeItem />
        </section>
        <section className='debt-section'>
          <h3>Debts</h3>
          <span>Placeholder for you debts.</span>
          <DebtItem />
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
