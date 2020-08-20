import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { Ticker } from 'models/Ticker';
import { Fonts, Dimens, Colors } from 'resources';
import { SvgUri } from 'react-native-svg';
import { Quote } from 'models/Quote';

interface Props {
  item: Ticker;
}

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
          <Text style={styles.desc}>{ticker.name}</Text>
        </View>
      </View>
 
      <View style={styles.col}>
        <SvgUri width={100} height={'100%'} uri={chartUrl} />
      </View>

      <View style={[styles.col, styles.lastCol]}>
        <Text style={styles.title}>{value}</Text>
        <View style={[styles.changeLabel, percentChange > 0 ? styles.changeLabelUp : styles.changeLabelDown]}>
          <Text style={styles.changeLabelText}>{`${percentChange}%`}</Text>
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
  },
  lastCol: {
    alignItems: 'flex-end'
  },
  headerRow: {
    flexDirection: 'row',
  },
  paddedRow: {
    marginTop: Dimens.space.s,
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
    height: 28,
    alignItems: 'flex-end',
    paddingHorizontal: Dimens.space.s,
    borderRadius: 5
  },
  changeLabelText: {
    ...Fonts.label15,
    lineHeight: 28,
    color: 'white',
  },
  changeLabelUp: {
    backgroundColor: 'green',
  },
  changeLabelDown: {
    backgroundColor: 'red',
  }
});
