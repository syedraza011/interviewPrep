// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly 
//to the left of the index is equal to the sum of all the numbers 
//strictly to the index's right.
// If the index is on the left edge of the array,
//  then the left sum is 0 because there are no elements to the left. 
//  This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.
// Example 1:
// Input: nums = [1,7,3,6,5,6] Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11=
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:
// Input: nums = [1,2,3] . // Output: -1
// Create an array sumLeft where sumLeft[i] is the sum of 
//all the numbers to the left of index i.
// Create an array sumRight where sumRight[i] is the sum 
//of all the numbers to the right of index i.
// For each index i, check if sumLeft[i] equals sumRight[i] return i.
// If no i found, return -1.
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
let nums = [1,7,3,6,5,6] // Output: 3
console.log(pivotIndex(nums));
function pivotIndex(nums) {
let sumLeft=[]
for(let i=0;i<nums.length;i++){
if(nums<sum){}
//let pivot=Math.floor(num.length/2){
    //let left=nums.length
}

};