import { BaseScreenProps } from 'modules/shared/screens/BaseScreen';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import { RootState } from 'store/RootState';
import { Ticker } from 'models/Ticker';
import { CoinItem, COIN_ITEM_MIN_HEIGHT } from '../atoms/CoinItem';
import { Colors, Dimens } from 'resources';
import {
  fetchTickerStartAction,
  listAppearedFirstTimeAction,
} from 'store/Actions';

const connector = connect(
  ({ tickersBranch }: RootState) => ({
    ...tickersBranch,
  }),
  {
    initAction: () => listAppearedFirstTimeAction(),
  },
);

type Props = {};

// Flat List Settings
const SEPARATOR_HEIGHT = Dimens.space.m;
const ROWS_ON_SCREEN = Math.ceil(
  Dimensions.get('screen').height /
    (COIN_ITEM_MIN_HEIGHT + 2 * SEPARATOR_HEIGHT),
);

const ItemSeparator = () => <View style={styles.separator} />;

export const HomeScreen = connector(
  (props: Props & BaseScreenProps<typeof connector>) => {
    const renderItem = ({ item }: { item: Ticker }) => <CoinItem item={item} />;
    const keyExtractor = (item: Ticker) => item.id;
    const renderedScreensAmount = 17; // Default is 21

    useEffect(() => {
      props.initAction();
    }, []);

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          {props.isLoading ? (
            <Text>{'Loading...'}</Text>
          ) : (
            <FlatList
              data={props.tickers}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ItemSeparatorComponent={ItemSeparator}
              windowSize={renderedScreensAmount}
              removeClippedSubviews={true}
              initialNumToRender={ROWS_ON_SCREEN}
              maxToRenderPerBatch={Math.min(10, ROWS_ON_SCREEN)}
              updateCellsBatchingPeriod={25}
            />
          )}
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
    marginVertical: SEPARATOR_HEIGHT,
  },
});
