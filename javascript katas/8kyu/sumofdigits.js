function digitalRoot(n) {
    // ...
    if(n>=0){
      while(n>=10)
        {
          n = n.toString() //'34'
               .split('') //['3','4'] into array of strings
               .map(Number) // [3,4] maps and converts each string to a number
               .reduce((a,b) => a+b,0)  
        }
     return n
    }
    return null
  }
  console.log(digitalRoot(34));