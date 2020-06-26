import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';

export default class Login extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View>
        <Text>Login</Text>
        <Button text="Sign In" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }
}
