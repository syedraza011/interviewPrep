//Three number sum
console.log(threeSum([12,3,1,2,-6,5,-8,6],0));
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