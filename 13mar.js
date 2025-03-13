let s =parseInt(prompt("size of array = "))
let e =new Array(Number(s));
for(let i=0 ;i<s;i++){
    e[i]=prompt("Enter element's = ");
}

let el = e.slice(1,++s)
for( let vl of el){
    if(vl%2==0){
        console.log("even = ", vl );
    }
}
