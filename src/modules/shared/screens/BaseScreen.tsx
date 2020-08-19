import { NavigationProp } from '@react-navigation/core';
import { ConnectedProps } from 'react-redux';

export type BaseScreenProps<T> = ConnectedProps<T> & {
  navigation: NavigationProp<{}>;
};
