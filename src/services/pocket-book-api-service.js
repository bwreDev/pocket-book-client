import TokenService from './token-services';
import config from '../config';

const PocketBookApiService = {
  getInputs() {
    return fetch(`${config.API_ENDPOINT}/inputs`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getInput(inputId) {
    return fetch(`${config.API_ENDPOINT}/inputs/${inputId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postInput(data) {
    return fetch(`${config.API_ENDPOINT}/inputs`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(data),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteInput(inputId) {
    return fetch(`${config.API_ENDPOINT}/inputs/${inputId}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
};

export default PocketBookApiService;
