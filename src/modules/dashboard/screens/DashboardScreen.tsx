import { BaseScreenProps } from 'modules/shared/screens/BaseScreen';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';

import { RootState } from 'store/RootState';
import { Fonts } from 'resources';

const connector = connect(({}: RootState) => ({}), {});

type Props = {};

export const DashboardScreen = connector(
  (_props: Props & BaseScreenProps<typeof connector>) => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Text style={{ ...Fonts.heading3, margin: 20}}>{'Dashboard screen'}</Text>
          <Text style={{ ...Fonts.label15, margin: 20}}>{'Move to Coins tab ->'}</Text>
        </SafeAreaView>
      </>
    );
  },
);
