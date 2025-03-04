// let count=0;
// setInterval(()=>{document.write(count++ )},1000)
// let di = 0;
// function fun(){
//     let n=document.querySelector("#num")
//     setInterval(()=>{n.innerHTML=di++},500)
// }


// count start - stop

let st;
let nu = 0;
function dum(){
    let a =document.querySelector("#new")
    st = setInterval(()=>{a.innerHTML= nu++},500)
}
function stp(){
    clearInterval(st)
}

