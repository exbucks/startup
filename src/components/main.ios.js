
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions, Scene, Router } from 'react-native-router-flux';
import {
  AppRegistry,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

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

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Actions.market()}>
          <Text>Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: '#F5FCFF',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
