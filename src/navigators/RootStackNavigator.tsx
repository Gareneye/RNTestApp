import { createStackNavigator } from '@react-navigation/stack';
import { RouteName } from 'constants/Routes';
import React from 'react';
import { AppTabNavigator } from './AppTabNavigator';

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.AppTabNavigator}
      headerMode={'none'}>
      <Stack.Screen name={RouteName.AppTabNavigator} component={AppTabNavigator} />
    </Stack.Navigator>
  );
};
