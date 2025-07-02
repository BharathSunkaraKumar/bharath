// let arr = [1,5,3,8,6,7]
// let fe = arr.forEach(element => {
//     // console.log(element) 
// });
// // console.log(fe)

// let fe2 = arr.filter((e) => {
//     return e>5
// })
// console.log(fe2)

//How would you remove duplicates from an array?

const duplicates = (arr) => {
    // return Array.from(new Set(arr))
    // return arr.filter((item, index) => arr.indexOf(item) === index)
    // const result = []
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !==arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1
}

// console.log(duplicates([1, 2, 2, 3]))


//How do you flatten a nested array?
// const arr = [1, [2, [3, 4]], 5];
// const arr2 = arr.flat(1)
// console.log(arr.flat(2))


//How to reverse an array without using .reverse()?

// const reverseArr = (arr) => {
    // let ra = [] // [3,2,2,1]
    // let length = arr.length; // 4
    // console.log(length)
    // for (let i = 0; i < arr.length; i++) { // 0<4t 1<4t 2<4t 3<4t
    //     ra[length-1-i] = arr[i] //4-1-0 = 3 =  ra[[3,1]] = 1 4-1-1=2 = ra[[2,2]] = 2  4-1-2 = 1 = ra[[1,2]] = 2  4-1-3 0 ra[[0,3]] = 3
    // }
    // return ra

//     let l = arr.length;
//     let revArry = [];
//     for (let index = 0; index < arr.length; index++) {
//         revArry[l-1-index] = arr[index]
//     }
//     return revArry
// }


// console.log(reverseArr([1, 2, 2, 3]))

// const maxNum = (arr) => {
    // let maxNumber = Number.NEGATIVE_INFINITY
    // for (let i = 0; i < arr.length; i++) {
    //    if(arr[i] > maxNumber) {
    //         maxNumber = arr[i]
    //    }
    // }
    // return maxNumber

//     let minNumber = Number.POSITIVE_INFINITY
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] < minNumber) {
//             minNumber = arr[i]
//        }
//     }
//     return minNumber

// }

// console.log(maxNum([1,4, 2, 2, 3]))

const rotateK = (arr, k) => {
    let size = arr.length;
    k = k % size
    if(k ===0) return arr
    const x = arr.splice(size-k);
    arr.unshift(...x)
    return arr
}

console.log(rotateK([1,2,3,4,5,6,7], 3))