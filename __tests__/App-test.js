/**
 * @format
 */

import React from 'react';
import 'react-native';
import renderer, { act, test } from 'react-test-renderer'; // Note: test renderer must be required after react-native.
import App from '../src/App';
import { CoinItem } from 'modules/coins/atoms/CoinItem';
import { CoinsScreen } from 'modules/coins/screens/CoinsScreen';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { watchTickersSortingSaga } from 'store/sagas/RootSaga';

// Ticker mock
const ticker = {
  quotes: {
    USD: {
      price: 36650.73287245,
      volume_24h: 876.10205064,
      volume_24h_change_24h: 131.7,
      market_cap: 1539330,
      market_cap_change_24h: 8.46,
      percent_change_15m: -0.08,
      percent_change_30m: 2.56,
      percent_change_1h: 0.1,
      percent_change_6h: 8.61,
      percent_change_12h: 7.01,
      percent_change_24h: 8.46,
      percent_change_7d: 2.31,
      percent_change_30d: 22.6,
      percent_change_1y: 78.04,
      ath_price: 1146320,
      ath_date: '2014-01-14T05:47:00Z',
      percent_from_price_ath: -96.8
    }
  },
  id: '42-42-coin',
  name: '42-coin',
  symbol: '42',
  rank: 1152,
  circulating_supply: 42,
  total_supply: 42,
  max_supply: 0,
  beta_value: 0.91836,
  last_updated: '2020-08-20T14:43:35Z'
}

// 1. Render tests
it('app works', async () => {
  await act(async () => {
    renderer.create(<App />);
   })
});

it('CoinItem renders correctly',  () => {
  const tree = renderer.create(<CoinItem item={ticker} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// 2. Saga tests
it('sortingSaga', assert => {
  const gen = cloneableGenerator(watchTickersSortingSaga)();
  // gen.next(); 
});


// 3. Sorting strategy test