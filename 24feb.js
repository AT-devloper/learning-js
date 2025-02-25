let el = document.createElement("h1")
el.textContent="hello from me" //body me append ke bina js se add kiya hua element nahi show karega 
el.setAttribute('style','color:#fff')

let n=document.getElementById('text')
n.removeAttribute('style')
n.innerHTML="<u> well to know</u>"


let bol= document.body
bol.append(el)                // yaha pe element ko append karna hota hai
bol.setAttribute("bgcolor","indianred")

