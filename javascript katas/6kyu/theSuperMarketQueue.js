function queueTime(customers,n){ //Greedy Algorithm
    let initialState =[];

    for(let i=0;i<n;i++){
        initialState.push(0);
    }
    // console.log(initialState);

    for(let i=0;i<=initialState.length-1;i++){
        initialState[i]=customers[i] || 0;
}
    // console.log(initialState);

for(let i=n;i<customers.length;i++){
    let smallestNumber = Math.min(...initialState);
    console.log(smallestNumber)
    let index = initialState.indexOf(smallestNumber);
    // console.log(index);
    initialState[index]=initialState[index]+customers[i];
    // console.log(initialState);
  
  
    // if(initialState[i]===0){
    //     initialState[i]=initialState[i]+customers[n+1]
    //     totalTime+=initialState[i];
    // }
}

return Math.max(...initialState);

}
console.log(queueTime([3,7,1,4,5], 2)); // 15