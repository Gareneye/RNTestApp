import { select, spawn, take, fork, call, put, takeLatest, takeLeading, takeEvery } from '@redux-saga/core/effects';
import { ActionId } from 'store/ActionId';
import ApiService from 'utilities/ApiService';
import { fetchTickerSuccessAction, fetchTickerErrorAction, fetchTickerStartAction, sortTickersDoneAction } from 'store/Actions';
import { RootState } from 'store/RootState';
import { TickerListSorting, sortTickers } from 'helpers/TickersSortingStrategies';
import { Ticker } from 'models/Ticker';

export function* rootSaga() {
  yield spawn(watchTickersSaga);
  yield spawn(watchListSaga);
  yield spawn(watchTickersSortingSaga);
}

export function* watchListSaga() {
  yield take(ActionId.LIST_APPEARED_FIRST_TIME);
  yield put(fetchTickerStartAction());
}

export function* watchTickersSortingSaga() {
  while (true) {
    const action: { payload: { sortBy: TickerListSorting }} = yield take(ActionId.SORT_TICKERS_START);
    const store: RootState = yield select();
    const tickers = store.tickersBranch.tickers;
    yield spawn(sortTickersSaga, tickers, action.payload.sortBy);
  }
}

export function* sortTickersSaga(tickers: Ticker[], sortBy:TickerListSorting ) {
  const sorted = sortTickers(tickers, sortBy );
  yield put(sortTickersDoneAction(sorted))
}

export function* watchTickersSaga() {
  while (true) {
    yield take(ActionId.FETCH_TICKER_START);
    yield call(fetchTickersSaga);
  }
}

export function* fetchTickersSaga() {
  try {
    const tickers = yield call(ApiService.getTickersForAllCoins);
    yield put(fetchTickerSuccessAction(tickers))
    return tickers
  } catch(_error) {
    yield put(fetchTickerErrorAction())
  }
}