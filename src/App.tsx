/**
 * App Initial Component
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackNavigator } from './navigators/RootStackNavigator';
import { navigationRef } from './utilities/Navigator';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
