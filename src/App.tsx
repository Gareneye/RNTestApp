/**
 * App Initial Component
 */

import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from 'navigators/RootStackNavigator';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/Store';
import { navigationRef } from 'utilities/Navigator';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
