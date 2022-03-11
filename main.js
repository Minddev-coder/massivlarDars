"use strict";
const arr =[1,2,3,4,5];
//Massivga qoshish va olib tashlash metodlari
//arr.pop(); oxiridan udalit qiladi
//arr.push(6); oxiriga yozilgan  natijani chiqaradi
// arr.unshift(0);
console.log(arr);


for(let i=0; i<arr.length; i++){
    console.log("hi"+arr[i]);
}
for (let key of arr){
    console.log(key);
}
arr.forEach(function (item,index,arr){
console.log(item+index+arr);
});




// const question=prompt("" ,"");
// const answer=question.split(" ,");//split massivga o'giradi faqat stringda
// console.log(answer);
// console.log(answer.join("; "));



const number=[2,10,17,24,8];
// number.sort();
// console.log(number);



// function sortArr(a,b){
// return a-b;
// }
// console.log(number);
function sinfAry(a,b) {
    return a-b;
}
sinfAry();
console.log(number);