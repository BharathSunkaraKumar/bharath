// const maxMin = (arr) => {
//     let setArr = [...new Set(arr)].sort((a, b) => b-a)
//     return {
//         max: setArr[0],
//         min: setArr[setArr.length-1]
//     }
// }
// console.log(maxMin([35,65,22,16,18,32,25]))

// const reverseArr = (arr) => {
//     let left = 0;
//     let right = arr.length-1;
//     while(left<right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         left++;
//         right--
//     }
//     return arr
// }
// console.log(reverseArr([35,65,22,16,18,32,25]))

const rotateArry = (arr, k) => {
    k = k%arr.length
    return [...arr.slice(k) ,...arr.slice(0,k)]
}
console.log(rotateArry([35,65,22,16,18,32,25], 3))