
const indices = (target, nums) => {
    for(var i=0;i<nums.length; i++) {
        for(var k=i+1; k<nums.length; k++) {
            if(nums[i]+nums[k] == target) {
                return [i, k]
            }
        }
    }
}
console.log(indices(5, [1,2,3]))
