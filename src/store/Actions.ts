import { action } from 'typesafe-actions';
import { ActionId } from './ActionId';
import { Ticker } from 'models/Ticker';

export const listAppearedFirstTimeAction = () =>
  action(ActionId.LIST_APPEARED_FIRST_TIME);

export const fetchTickerStartAction = () =>
  action(ActionId.FETCH_TICKER_START);

export const fetchTickerSuccessAction = (tickers: Ticker[]) =>
  action(ActionId.FETCH_TICKER_SUCCESS, {tickers});

export const fetchTickerErrorAction = () =>
  action(ActionId.FETCH_TICKER_ERROR);