import { action } from 'typesafe-actions';
import { ActionId } from './ActionId';
import { Ticker } from 'models/Ticker';
import { TickerListSorting } from 'helpers/TickersSortingStrategies';

// Actions from components
export const listAppearedFirstTimeAction = () =>
  action(ActionId.LIST_APPEARED_FIRST_TIME);

// Fetching Tickers
export const fetchTickerStartAction = () => action(ActionId.FETCH_TICKER_START);

export const fetchTickerSuccessAction = (tickers: Ticker[]) =>
  action(ActionId.FETCH_TICKER_SUCCESS, { tickers });

export const fetchTickerErrorAction = () => action(ActionId.FETCH_TICKER_ERROR);

// Sorting
export const sortTickersStartAction = (sortBy: TickerListSorting) =>
  action(ActionId.SORT_TICKERS_START, { sortBy });

export const sortTickersDoneAction = (sorted: Ticker[]) =>
  action(ActionId.SORT_TICKERS_DONE, { sorted });
