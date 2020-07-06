import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './LandingPage.css';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <header role='banner'>
          <h1>Pocket Book!</h1>
          <h2>Keep track of your finances.</h2>
          <h3>
            Calculate your left over income after bills and
            expenditures.
          </h3>
        </header>
      </>
    );
  }
}
