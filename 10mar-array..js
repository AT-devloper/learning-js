// let arr = [12,44.4,"A",'cybrom',true]
// for (let vl of arr){
//     console.log(vl);
// }
// for ( let k in arr){
//     console.log(k);
// }


let size = parseInt(prompt("Enter size = "));// input element form user in ARRAY
let input = new Array(Number(size));
for(let i=0;i<size;i++){
    input[i]=prompt('Enter element : ');
}
console.log("Elements are - ",(input));
// console.log(input); 