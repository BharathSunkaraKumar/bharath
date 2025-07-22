const reverseStr = (str) => {
    // return str.split('').reverse().join('')
    let str1 = str.split('');
    let left = 0;
    let right = str.length-1;
    while(left<right) {
        [str1[left], str1[right]] = [str1[right], str1[left]]
        left++;
        right--
    }
    return str1.join('')

}
let str = 'bharath';
console.log(reverseStr(str))
