// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let n
    let arrResult = []
    for (let i = 0; i < nums.length-1; i++){
        n = target - nums[i]
        arrResult[0] = i
        for(let j = 1 +i; j < nums.length; j++){
            if(nums[j] === n){
                arrResult[1] = j
                return arrResult
            }
        }
    }
}