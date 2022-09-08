
// task1 //

let text = prompt("write a text")
let words = 1;
let textArray = Array.from(text);


for (let i = 0; i < textArray.length; i++){
if (textArray[i] == " "){
words++;
}
}
console.log("Words: " + words);



let vowel_list = 'aeiouyAEIOUY';
let vcount = 0;



for(var x = 0; x < text.length ; x++)
{
if (vowel_list.indexOf(text[x]) !== -1)
{
vcount += 1;
}
}
console.log("vowels: " + vcount);


// task2 //


let set1 = prompt("Enter your numbers for set1").split(",")
let set2 = prompt("Enter your numbers for set2").split(",")

function  distinct(x,y) {
    var sum=0;
    for (let i= 0; i< x.lengtht ; i++) {
        if(y.includes(x[i])==false){
            sum=sum+x[i];
        }
        
    }
    for ( let j=0; j< y.length; j++){
        if(x.includes(y[j])==false){
            sum=sum+x[j];
        }
    }
    return sum;
}

console.log (distinct(set1, set2));



