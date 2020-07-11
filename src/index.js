import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { InputProvider } from './contexts/InputsContext';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <InputProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </InputProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
