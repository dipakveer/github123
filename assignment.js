//Dipak Veer
//Assignment


const sampleText = 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe';
let arrayWords=["Twas", "brillig", "and","the"];
//function call
console.log("A",wordsFromString(sampleText));//convert string into words array
console.log("B",capitalWords(arrayWords)); //capital the words
console.log("C",lowerCaseWords(arrayWords));//lowercase the words
console.log("D",firstLetterOfWord(arrayWords));// first letter of each word of array
console.log("E",findWord(arrayWords,'t'));//provided word of started with particular character
console.log("F",WordCounts(arrayWords,'t'));//provided count of words that started with character
console.log("G",CountCharacters(sampleText));//give the occurences of particular character in a string
//function implimentation
function wordsFromString(sampleText){
    let array=[];
    for(i=0;i<sampleText.length;i++){
        array=sampleText.split(" ");
    }
return array;
}

function capitalWords(sampleText){
    let array=[];
    for(i=0;i<sampleText.length;i++){
        array[i]=sampleText[i].toUpperCase();
    }
return array;
}

function lowerCaseWords(sampleText){
    let array=[];
    for(i=0;i<sampleText.length;i++){
        array[i]=sampleText[i].toLowerCase();
    }
return array;
}

function firstLetterOfWord(sampleText){
    let array=[];
    for(i=0;i<sampleText.length;i++){
        array[i]=sampleText[i][0];
    }
return array;
}

function findWord(sampleText,ch){
    let array=[];
    var ct=0;
    for(i=0;i<sampleText.length;i++){
        if(ch==sampleText[i][0]|| ch==sampleText[i][0].toLowerCase()){
            array[ct]=sampleText[i];
            ct++
        }
    }
return array;
}

function WordCounts(sampleText,ch){    
    var ct=0;
    for(i=0;i<sampleText.length;i++){
        if(ch==sampleText[i][0]){            
        ct++
        }
    }
return ct;
}

function CountCharacters(sampleText){  
    let obj=new Map(); 
    var ct=0;
   
    for(i=0;i<sampleText.length;i++){             
    obj.set(sampleText[i].toLowerCase(),ct);                 
    }

    obj.forEach(function(value, key) {
        for(i=0;i<sampleText.length;i++){
        if(key==sampleText[i]){           
            obj.set(key,++value);
        }      
        }
    })
return obj;
}