import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserPage from '../../components/UserPage/UserPage';
import LandingPage from '../../components/LandingPage/LandingPage';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import InputForm from '../../components/InputForm/InputForm';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import IdleService from '../../services/idle-service';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle);

    if (TokenService.hasAuthToken()) {
      IdleService.regiserIdleTimerResets();

      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets();
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.forceUpdate();
  };

  render() {
    return (
      <main className='App'>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/input' component={InputForm} />
          <Route path='/user' component={UserPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}
