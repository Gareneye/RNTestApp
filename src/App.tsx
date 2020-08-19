/**
 * App Initial Component
 */

import { NavigationContainer } from '@react-navigation/native';
import { RootStackNavigator } from 'navigators/RootStackNavigator';
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/Store';
import { navigationRef } from 'utilities/Navigator';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
