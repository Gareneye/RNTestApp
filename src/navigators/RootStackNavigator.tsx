import { createStackNavigator } from '@react-navigation/stack';
import { RouteName } from 'constants/Routes';
import { DetailsScreen } from 'modules/home/screens/DetailsScreen';
import { HomeScreen } from 'modules/home/screens/HomeScreen';
import React from 'react';

const Stack = createStackNavigator();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.HomeScreen}
      headerMode={'none'}>
      <Stack.Screen name={RouteName.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={RouteName.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};
