let ar=[
    {name:"ayush",
     attend:"pass",
     productivity:"good" ,
     age:23  
    },{
     name:"ayu",
     attend:"ok",
     productivity:"ii",
     age:24
    },{
     name:"poddar",
     attend:"on",
     productivity:"again",
     age:25
    }
]
 

//Map method -> callback  function accept, new array return.

let arname=ar.map((e)=>{return e.name})
console.log(arname);

let arage=ar.map((e)=>{return e.age})
console.log(arage);


//filter function

let f1 =ar.filter((e)=>{return e.age>23})
console.log(f1);

let f2=ar.filter((e)=>{return e.age<24})
console.log(f2);
