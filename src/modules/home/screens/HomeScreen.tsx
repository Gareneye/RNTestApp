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
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { Fonts } from 'resources/Fonts';
import { testAction } from 'store/Actions';
import { RootState } from 'store/RootState';
import { useApi } from 'utilities/UseAPI';
import { Ticker } from 'models/Ticker';
import { CoinItem, COIN_ITEM_MIN_HEIGHT } from '../atoms/CoinItem';
import { Colors, Dimens } from 'resources';

const connector = connect(
  ({ testBranch }: RootState) => ({
    testValue: testBranch.title,
  }),
  {
    testTrigger: (value: string) => testAction(value),
  },
);

type Props = {};

// Flat List Settings
const SEPARATOR_HEIGHT = Dimens.space.m;
const ROWS_ON_SCREEN = Dimensions.get("screen").height / (COIN_ITEM_MIN_HEIGHT + 2*SEPARATOR_HEIGHT); // Naive approach


const ItemSeparator = () => <View style={styles.separator} />;


export const HomeScreen = connector(
  (props: Props & BaseScreenProps<typeof connector>) => {
    const { data } = useApi<Ticker[]>({ method: 'getTickersForAllCoins' });

    const renderItem = ({ item }: { item: Ticker }) => <CoinItem item={item} />;
    const keyExtractor = (item: Ticker) => item.id;
    

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={ItemSeparator}
          />
        </SafeAreaView>
      </>
    );
  },
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.separator,
    marginVertical: SEPARATOR_HEIGHT
  },
});
