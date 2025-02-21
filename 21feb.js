let a = document.getElementById("head")
console.log(a);
a.textContent= "....WHATS DAY NOW...."
a.innerHTML="<u> CHANGING ARE COMMON ... </u>"

let head2 = document.getElementById("head2")
head2.innerHTML="<i>you whats</i>"

let b = document.getElementsByTagName("h2")
console.log(b);

b[2].innerHTML="<i>DAYS </i>"

let c = document.getElementsByClassName("now")
console.log(c);