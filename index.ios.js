/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import App from './src/index';
import configureStore from './src/store/configure-store';

const store = configureStore();

class SuperMarket extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('SuperMarket', () => SuperMarket);
