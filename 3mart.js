var count = 0;
function add(){
    if (count<4){
    let el =document.createElement("Input")
    let body=document.body
    body.append(el)
    count++
    }
    else {
        alert("limit are crossed")
    }
}  