function remove(string){
    let exclamation ='';
    let characters='';
        for(let i= 0; i<string.length; i++){
        if(string[i] === '!'){
          exclamation += string[i];

        }
        else{
                    characters += string[i];
                }
    }
    return characters + exclamation;
}
let b= remove("!Hello !world! !")
console.log(b) 