import { BaseScreenProps } from 'modules/shared/screens/BaseScreen';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import { L10n } from 'resources';
import { Fonts } from 'resources/Fonts';
import { testAction } from 'store/Actions';
import { RootState } from 'store/RootState';
import { useApi } from 'utilities/UseAPI';
import { Ticker } from 'models/Ticker';

const connector = connect(
  ({ testBranch }: RootState) => ({
    testValue: testBranch.title,
  }),
  {
    testTrigger: (value: string) => testAction(value),
  },
);

type Props = {};

export const HomeScreen = connector(
  (props: Props & BaseScreenProps<typeof connector>) => {
    const { data } = useApi<Ticker[]>({ method: 'getTickersForAllCoins' });

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          <Text>Tyle: {JSON.stringify(data)}</Text>
        </SafeAreaView> 
      </>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    ...Fonts.body15,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
