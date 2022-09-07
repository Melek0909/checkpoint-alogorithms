
// task1 //

let text = "we are gomycode."
let words = 1;
let textArray = Array.from(text);


for (let i = 0; i < textArray.length; i++){
if (textArray[i] == " "){
words++;
}
}
console.log("Words: " + words);



let vowel_list = 'aeiou';
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


let set1=[2 , 58 , 69 , 99 , 122 , 8 , 18]
let set2=[7 , 99 , 18 , 78 , 8 , 58 , 4 , 3]



