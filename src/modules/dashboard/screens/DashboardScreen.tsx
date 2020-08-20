import { BaseScreenProps } from 'modules/shared/screens/BaseScreen';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';

import { RootState } from 'store/RootState';

const connector = connect(({}: RootState) => ({}), {});

type Props = {};

export const DashboardScreen = connector(
  (_props: Props & BaseScreenProps<typeof connector>) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text>{'Dashboard screen'}</Text>
        </SafeAreaView>
      </>
    );
  },
);
