import { RouteName } from 'constants/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CoinsScreen } from 'modules/coins/screens/CoinsScreen';
import React from 'react';
import { DashboardScreen } from 'modules/dashboard/screens/DashboardScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={RouteName.CoinsScreen}>
      <Tab.Screen
        name={RouteName.DashboardScreen}
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Today',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.AppTabNavigator}
        component={CoinsScreen}
        options={{
          tabBarLabel: 'Coins',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="database" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
