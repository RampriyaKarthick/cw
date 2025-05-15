function sumDigPow(a,b){ //To find Eureka Numbers between a and b,Eureka Numbers are numbers that are equal to the sum of their digits 
// raised to the power of their respective positions.
    
    let allNumbers = [];
    let squareArray =[];
    for(let x=a ; x<=b; x++){
        allNumbers.push(x);
       }

       for (let i=0; i<allNumbers.length; i++){
           let sum = 0;
            let squareNumber = allNumbers[i].toString().split('');
            for(let j=0; j<squareNumber.length; j++){
                let poweredSum = Math.pow(Number(squareNumber[j]),j+1)  
                sum+= poweredSum;
            }
           
             
        if (sum=== allNumbers[i]){
            squareArray.push(allNumbers[i])
        }
    

}
        return squareArray;
}