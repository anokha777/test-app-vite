import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../types';

function getTestApi() {
  return axios
    .get(`${import.meta.env.REACT_APP_API_URL}/health`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      return Promise.resolve(err.response.data);
    });
}
function* testDataFun() {
  try {
    const res = yield call(getTestApi);
    if (res) {
      yield put({
        type: types.GET_TEST_SUCCESS,
        testData: res,
      });
    } else {
      yield put({
        type: types.GET_TEST_ERROR,
        message: 'Error in test api.'
      });
    }
  } catch (e) {
    yield put({
      type: types.GET_TEST_ERROR,
      message: 'Error in test api.'
    });
  }
}
export function* testSaga() {
  yield takeEvery(types.GET_TEST, testDataFun);
}