import React, { Component } from 'react';

const InputsContext = React.createContext({
  inputs: [],
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  clearUser: () => {},
  setInputs: () => {},
  clearInput: () => {},
});

export default InputsContext;

export class InputProvider extends Component {
  state = {
    inputs: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setInputs = (inputs) => {
    this.setState({ inputs });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  clearInput = () => {
    this.setInputs([]);
    this.setUser({});
  };

  addInput = (input) => {
    this.setInputs([...this.state.inputs, input]);
  };

  render() {
    const value = {
      inputs: this.state.inputs,
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setInputs: this.setInputs,
      setUser: this.setUser,
      clearInput: this.clearInput,
      addInput: this.addInput,
    };

    return (
      <InputsContext.Provider value={value}>
        {this.props.children}
      </InputsContext.Provider>
    );
  }
}
