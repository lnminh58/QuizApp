import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNav from './MainStackNav';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackNav />
    </NavigationContainer>
  );
}
