const secondLargestNum = (arr) => {
    // const sortArr = arr.sort((a, b) => {
    //     return a-b
    // })
    // const largestNum = sortArr.pop()
    // let smallNum = 0
    // // console.log(largestNum)
    // for(var i = 0; i < arr.length-1; i++) {
    //     if(arr[i] < largestNum) {
    //         smallNum = arr[i]
    //     }
    // }
    // return smallNum
    // const uniqueArray = Array.from(new Set(arr))
    // uniqueArray.sort((a, b) => {
    //     return b-a
    // })
    // if(uniqueArray.length >= 2) {
    //     return uniqueArray[1]
    // }
    // // console.log(sortArray)
    let largest = Number.NEGATIVE_INFINITY; 
    let secondLargest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {  //0<8 1<8 2<8 3<8 4<8 5<8 6<8 7<8 8<8 f
       if(arr[i] > largest) { // 5 > l t, 1 > 5 f, 6>5 t 19>6 t 35>19 t 34>35 f 35>35 f 35>38 t
        secondLargest = largest; // i 5 6 19 [35]
        largest = arr[i] // 5 6 19 35 38
       }else if(arr[i] != largest && arr[i]>secondLargest) { // 1!=5 && 1>i t 34!=35 && 34>19 t 35!=35 f
        secondLargest = arr[i] // 1 34
       }
    }
    return secondLargest
}
console.log(secondLargestNum([10, 5, 10]))