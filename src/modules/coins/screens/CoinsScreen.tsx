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
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { RootState } from 'store/RootState';
import { Ticker } from 'models/Ticker';
import { CoinItem, COIN_ITEM_MIN_HEIGHT } from '../atoms/CoinItem';
import { Colors, Dimens, Fonts } from 'resources';
import {
  listAppearedFirstTimeAction,
  sortTickersStartAction,
} from 'store/Actions';
import { TickerListSorting } from 'helpers/TickersSortingStrategies';

const connector = connect(
  ({ tickersBranch }: RootState) => ({
    sorted: tickersBranch.sorted,
    isLoading: tickersBranch.isLoading,
    sortBy: tickersBranch.sortBy
  }),
  {
    initAction: () => listAppearedFirstTimeAction(),
    filterTickers: (sortBy: TickerListSorting) =>
      sortTickersStartAction(sortBy),
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

export const CoinsScreen = connector(
  (props: Props & BaseScreenProps<typeof connector>) => {
    const renderItem = ({ item }: { item: Ticker }) => <CoinItem item={item} />;
    const keyExtractor = (item: Ticker) => item.id;
    const renderedScreensAmount = 17; // Default is 21

    useEffect(() => {
      props.initAction();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.wrapper}>
          {/* Todo: Refactor this */}
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                props.filterTickers(TickerListSorting.LOWER_PRICE);
              }}>
              <Text style={{ ...Fonts.caption13, height: 30, lineHeight: 30, paddingHorizontal: 15, borderWidth: 1, margin: 20, backgroundColor: props.sortBy === TickerListSorting.LOWER_PRICE ? 'grey' : 'white'  }}>
                {'Sort by lower price'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.filterTickers(TickerListSorting.HIGHER_PRICE);
              }}>
              <Text style={{ ...Fonts.caption13, height: 30, lineHeight: 30, paddingHorizontal: 15, borderWidth: 1, margin: 20,backgroundColor: props.sortBy === TickerListSorting.HIGHER_PRICE ? 'grey' : 'white' }}>
                {'Sort by higher price'}
              </Text>
            </TouchableOpacity>
          </View>

          {props.isLoading ? (
            <Text style={{ paddingHorizontal: 20 }}>{'Loading...'}</Text>
          ) : (
            <FlatList
              contentContainerStyle={{ marginHorizontal: 20 }}
              data={props.sorted}
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
