// 1-masala

// function uzunSoz(arr){
//     let word = "";
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].length > word.length){
//             word = arr[i]
//         }
//     }
//     return word;
// }
// console.log(uzunSoz(["anor","behi","gilos","olma","anjir","tarvuz"]));

// 2-masala

// function birlashtirish(arr){
//     let res = arr.slice().join(" ");
//     return res
// }
// console.log(birlashtirish(["salom", "hayr"]));

// 3-masala

// function maxWords(arr){
//     for (let i = 0; i < arr.length; i++) {
//         const words = arr[i];
//         let m = words.toUpperCase();
//         arr[i] = m;
//     }
//     return arr
// }
// console.log(maxWords(["Hello", "bye"]));

// 4-masala

// function kopaytma(arr){
//     let p = 1;
//     for(let i = 0; i < arr.length; i++){
//         p = p * arr[i]
//     }
//     return p;
// }
// console.log(kopaytma([1,2,3,4,5]));

// 5-masala

// let arr = [1,2,3,4,5];
// function yangiFunksiya(arg) {
//     let m = arg.filter(function(value,index){
//         return value;
//     })
//     return m;
// }
// let res = yangiFunksiya(arr);
// console.log(res);

// 6-masala

// function teskari(arr){
//     let res = arr.reverse();
//     return res;
// }
// console.log(teskari([1,2,3,4,5]));

// 7-masala

// let arr = ["Hello", true,1,1n];
// let res = arr.map(function(value,index,a){
//     return {value,index};
// })
// console.log(res);

// 8-masala

// function indexTopish(arr,number){
//     return arr.indexOf(number);
// }
// let numbers = [1,2,3,4,5];
// let res = indexTopish(numbers,2)
// console.log(res);

// 9-masala

// let arr = [1,2,3,4,5];
// function newFunk(arg){
//     let m = arg.map(function(value,index){
//         return value+2
//     })
//     return m
// }
// let res = newFunk(arr);
// console.log(res);

// 10-masala

// function musbatVaManfiy(arr){
//     let musbat = [];
//     let manfiy = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             musbat.push(arr[i])
//         } else {
//             manfiy.push(arr[i])
//         }
//     }
//     return {musbat,manfiy}
// }
// console.log(musbatVaManfiy([1,2,-1,-2,3,-3]));

// 11-masala



// 12-masala

// function strgaOtkazish(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + "")
//     }
//     return newArr;
// }
// console.log(strgaOtkazish([1,2,3,true]));

// 13-masala

// function juftIndex(arr){
//     let m = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 == 0){
//             m.push(arr[i])
//         }
//     }
//     return m;
// } 
// console.log(juftIndex([1,2,3,4,5]));

// 14-masala

// function toq(arr){
//     let counter = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 1){
//             counter++
//         }
//     }
//     return counter;
// }
// let res = toq([1,2,3,4,5,6]);
// console.log(res);

// 15-masala xatttttttttttttttttttttttoooooooooooooooooo

// function MaxAndMin(arr){
//     let max;
//     let min;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             return arr[i];
//         } else{
//             return max;
//         }
//     }
// }
// let res = MaxAndMin([1,2]);
// console.log(res);

// 16-masala

// function ikkiQiymat(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(arr[i]);
//         newArr.push(arr[i]);
//     }
//     return newArr
// }
// let res = ikkiQiymat([1,2,4,5,5])
// console.log(res);

// 19-masala

// function notStr(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string'){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr
// }
// let res = notStr([1,2,3,"hello","bye"]);
// console.log(res);

// 20-masala

// function boshStr(arr){
//     let counter = 0;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === " "){
//             counter++
//         }
//     }
//     return counter
// }
// let res = boshStr([" ","salom"," ", "hayr"]);
// console.log( res);


// 21-masala

// function teskariMatn(arr){
//     let words = arr.reverse();
//     return words.join(" ")
// }
// let res = teskariMatn(["hayr","salom"]);
// console.log(res); 

// 22-masala

// function kvIldiz(arr){
//     // for(let i = 0; i < arr.length; i++){
//         return arr.map(Math.sqrt);
//     // }

// }
// let res = kvIldiz([1,4,9])
// console.log(res);

// 23-masala

// function musbat(arr){
//     let m = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             m.push(arr[i]);
//         }
//     }
//     return m;
// }
// let res = musbat([1,-2,3,-4,5,-6]);
// console.log("musbat sonlar:",res);

// 24-masala

// function toqVaJuft(arr){
//     let juft = [];
//     let toq = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 == 0){
//             juft.push(arr[i]);
//         } else{
//             toq.push(arr[i]);
//         }
//     }
//     return {toq, juft}
// }
// let res = toqVaJuft([1,2,3,4,5])
// console.log(res);

// 25-masala

// function factorial(arr){
//     let p = 1;
//     for(let i = 0; i < arr.length; i++){
//         p*=arr[i]
//     }
//     return p;
// }
// let res = factorial([1,2,3,4,5]);
// console.log(res);