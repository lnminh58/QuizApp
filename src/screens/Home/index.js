import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '@/components';
import { APP_COLOR, scaleScale, Styles } from '@/styles';

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={[
            Styles.shadowMD,
            {
              backgroundColor: APP_COLOR.BG_DARK,
              width: scaleScale(1000),
              height: scaleScale(1000),
              borderRadius: scaleScale(500),
              marginTop: scaleScale(-700),
              marginLeft: scaleScale(-150),
            },
          ]}
        />
        <Text>Home</Text>
        <Button text="Sign Out" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  }
}
