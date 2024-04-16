// export const promise = (
//   dispatch,
//   beforeRequest,
//   request,
//   requestParams,
//   successAction,
//   errorAction,
//   passResponseDataToSuccessAction
// ) => {
//   dispatch(beforeRequest());
//   return new Promise((resolve) => {
//     try {
//       request(requestParams)
//         .then((res) => {
//           dispatch(
//             successAction(
//               passResponseDataToSuccessAction ? res.data : requestParams
//             )
//           );
//           console.log(res, "promise");
//           resolve(-1);
//         })
//         .catch((error) => {
//           if (error.response && error.response.status === 403) {
//             dispatch(errorAction(error));
//             resolve(error.response.data.error.code);
//           } else {
//             console.log(error);
//             dispatch(errorAction(error));
//             resolve(0);
//           }
//         });
//     } catch (error) {
//       console.log(error);
//       dispatch(errorAction(error));
//       resolve(0);
//     }
//   });
// };

// function sum(n) {
//   // base case
//   if (n === 1) {
//     return 1;
//   }
//   // recursive case
//   else {
//     return n + sum(n - 1);
//   }
// }

// // example usage
// console.log(sum(10));
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// // example usage
// const array = [1, 2, 3, 4, 5];
// const target = 5;
// console.log(linearSearch(array, target)); // output: 2
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// example usage
const array = [1, 2, 3, 4, 5];
const target = 3;
console.log(binarySearch(array, target)); // output: 2
