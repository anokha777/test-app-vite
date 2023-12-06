import * as type from '../types';

const initialState = {
  isLoading: false,
  testData: '',
};

export default function testRducerData(state = initialState, action) {
  switch(action.type) {
  case type.GET_TEST:
    return {
      ...state,
      isLoading: true,
    };
  case type.GET_TEST_SUCCESS:
    return {
      ...state,
      testData: action.testData,
      isLoading: false,
    };
  case type.GET_TEST_ERROR:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
}