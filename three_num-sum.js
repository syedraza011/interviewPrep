//Three number sum
// O(n^2) time | O(n) space
/*console.log(threeSum([12,3,1,2,-6,5,-8,6],0));
function threeSum(array,target){
    let triplet=[];
    array.sort((a,b)=>a-b);
    //console.log(array);
    for(let i=0;i<array.length-2;i++){
        let left=i+1;
        let right=array.length-1
        
        while(left < right){
            currentSum= array[i]+array[left]+array[right];
            if(currentSum===target){
                triplet.push([array[i],array[left],array[right]]);
                left +=1;
                right -=1;
            }
            else if (currentSum<target){
                left +=1;
            }
            else if (currentSum>target){
                right -=1;
            }
        }
    }
    return triplet;
}

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/
console.log(threeNumberSum([12,3,1,2,-6,5,-8,6],0));
function threeNumberSum(array, targetSum) {
    triplet=[];
    for(let i=0;i<array.length-2;i++){
        for(let j=i+1;j<array.length-1;j++)
        for(let k=0;k<array.length;k++){
            if(targetSum===array[i]+array[j]+array[k]){
                triplet.push([array[i],array[j],array[k]])
            } 
        }
    }
    return triplet
}