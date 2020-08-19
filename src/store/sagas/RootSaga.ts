import { select, spawn, take } from '@redux-saga/core/effects';
import { ActionId } from 'store/ActionId';

export function* rootSaga() {
  console.log('Hello Sagas!');
  yield spawn(watchTestSaga);
}

export function* watchTestSaga() {
  while (true) {
    yield take(ActionId.TEST_MESSAGE);
    const state = yield select();
    console.log('Hello Test message!');
    console.log(`State: ${JSON.stringify(state)}`);
  }
}
