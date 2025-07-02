

const removeDuplicates = (arr) => {
    // for(var i=0; i<arr.length-1; i++) {
    //     if(arr[i] === arr[i+1]) {
    //         arr.splice(i+1, 1)
    //         i--
    //     }
    // }
    // return arr.length
    console.log('hi')
    if(arr.length ===0) return 0
    let i = 0 // 0
    for(var j=1; j<arr.length; j++) { // 1<10 t 2<10
        if(arr[i] !== arr[j]) { // 0!=0f 0!=1t
            i++ //1
            arr[i] = arr[j] // 0=1 = 1
            //[0,1,1,1,1,2,2,3,3,4]
        }
    }
    return i+1
}
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))