const roateArray = (nums, k) => {
    const size = nums.length; // 7
    if(k > size) {
        k = k % size
    }
    const roated = nums.splice(size-k, size) // 7-3=4, 7 
    nums.unshift(...roated);
    return nums
}
console.log(roateArray([1,2,3,4,5,6,7], 3))

const arr = [1,2,3,4,5,6,7];
const cut = arr.splice(4, 7)
console.log(arr)