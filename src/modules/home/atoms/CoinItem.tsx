import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Ticker } from 'models/Ticker';
import { Fonts, Dimens, Colors } from 'resources';
import { SvgUri } from 'react-native-svg';
import { Quote } from 'models/Quote';

interface Props {
  item: Ticker;
}

export const MAX_TITLE_LENGTH = 12;
export const COIN_ITEM_MIN_HEIGHT = 45;

export const CoinItem = (props: Props) => {
  const ticker = props.item;
  const imageUrl = `https://static2.coinpaprika.com/coin/${ticker.id}/logo-thumb.png`;
  const chartUrl = `https://graphs2.coinpaprika.com/currency/chart/${ticker.id}/7d/chart.svg`;

  const tempQuote: Quote | undefined = ticker.quotes['USD'];
  const value = tempQuote.price.toFixed(2);
  const percentChange = tempQuote.percent_change_7d;

  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <View style={styles.headerRow}>
          <Image source={{ uri: imageUrl }} style={styles.icon} />
          <Text style={styles.title}>{ticker.symbol}</Text>
        </View>
        <View style={[styles.headerRow, styles.paddedRow]}>
          <Text style={styles.rank}>{ticker.rank}</Text>
          <Text style={styles.desc}>
            {ticker.name.slice(0, MAX_TITLE_LENGTH)}
            {ticker.name.length > MAX_TITLE_LENGTH ? '...' : null}
          </Text>
        </View>
      </View>

      <View style={styles.col}>
        <View style={styles.row}>
          <View style={[styles.col, styles.chartWrapper]}>
            <SvgUri width={100} height={30} uri={chartUrl} />
          </View>

          <View style={[styles.col, styles.lastCol, styles.pricesWrapper]}>
            <Text style={styles.price}>{`$ ${value}`}</Text>
            <View style={[styles.headerRow, styles.paddedRow]}>
              <View
                style={[
                  styles.changeLabel,
                  percentChange > 0
                    ? styles.changeLabelUp
                    : styles.changeLabelDown,
                ]}>
                <Text
                  style={styles.changeLabelText}>{`${percentChange}%`}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: COIN_ITEM_MIN_HEIGHT,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  lastCol: {
    alignItems: 'flex-end',
  },
  headerRow: {
    flexDirection: 'row',
  },
  paddedRow: {
    marginTop: Dimens.space.s,
  },
  pricesWrapper: {
    minWidth: 80,
  },
  chartWrapper: {
    justifyContent: 'flex-end',
    marginRight: Dimens.space.xl,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: Dimens.space.s,
  },
  title: {
    ...Fonts.label15,
  },
  rank: {
    ...Fonts.caption13,
    backgroundColor: Colors.border,
    lineHeight: 20,
    minWidth: 20,
    height: 20,
    textAlign: 'center',
    paddingHorizontal: Dimens.space.xs,
    marginRight: Dimens.space.s,
    color: Colors.desc,
  },
  desc: {
    ...Fonts.body15,
    color: Colors.desc,
  },
  changeLabel: {
    minWidth: 20,
    height: 24,
    alignItems: 'flex-end',
    paddingHorizontal: Dimens.space.s,
    borderRadius: 5,
  },
  changeLabelText: {
    ...Fonts.label15,
    lineHeight: 24,
    color: 'white',
  },
  changeLabelUp: {
    backgroundColor: 'green',
  },
  changeLabelDown: {
    backgroundColor: 'red',
  },
  price: {
    ...Fonts.body15,
  },
});
