import { select, spawn, take, fork, call, put, takeLatest, takeLeading, takeEvery } from '@redux-saga/core/effects';
import { ActionId } from 'store/ActionId';
import ApiService from 'utilities/ApiService';
import { fetchTickerSuccessAction, fetchTickerErrorAction, fetchTickerStartAction } from 'store/Actions';

export function* rootSaga() {
  yield spawn(watchTickersSaga);
  yield spawn(watchListSaga);
}

export function* watchListSaga() {
  yield take(ActionId.LIST_APPEARED_FIRST_TIME);
  yield put(fetchTickerStartAction());
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