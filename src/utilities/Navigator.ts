import { NavigationContainerRef, StackActions } from '@react-navigation/core';
import { RouteName } from 'constants/Routes';
import * as React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef>();

export const Navigator = {
  navigate(name: RouteName, params?: any) {
    navigationRef.current?.navigate(name, params);
  },

  goBack() {
    navigationRef.current?.goBack();
  },

  resetTo(name: RouteName, params?: any) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
    navigationRef.current?.reset({
      index: 0,
      routes: [{ name }],
    });
  },
};

export { RouteName };
