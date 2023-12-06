// import * as type from '../types';

// export function getTestData() {
//   return {
//     type: type.GET_TEST,
//   }
// }


import * as type from  '../types';

export function getTestData() {
  console.log('getTestData action been called.');
  return {
    type: type.GET_TEST
  };
}