import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { APP_COLOR } from '@/styles';

import AppNavigator from './routes';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    const { dispatch } = this.props;
    return (
      <>
        <AppNavigator dispatch={dispatch} />
      </>
    );
  }
}

export default connect(
  null,
  null,
)(App);
