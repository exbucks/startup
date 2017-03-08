import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from './actions/auth';

import Init from './components/init';
import Login from './components/login';
import Main from './components/main';
import Market from './components/market';

// map redux store to props
function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

// map actions to props
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Auth: bindActionCreators(AuthAction, dispatch),
    }
  }
}

const reducerCreate = params => {
  const defaultReducer = Reducer(params);

  return (state, action) => {
    console.log("ROUTER ACTION: ", action);
    return defaultReducer(state, action);
  }
}


export default class popuppin extends Component {
  render() {
    return(
      <Router createReducer={reducerCreate}>
        <Scene key="root" hideNavBar>
          <Scene key="init" component={Init} title="Init" intial />
          <Scene key="login" component={Login} title="Login" />
          <Scene key="main" component={Main} title="Main" />
          <Scene key="market" component={Market} title="Market" />
        </Scene>
      </Router>
    );
  }
}
