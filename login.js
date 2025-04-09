function dt(){
    let uda={
        Lname : document.querySelector("#name").value,
        Lpass : document.querySelector("#pass").value,

    }
    let user=JSON.parse(localStorage.getItem('udata'))

    if(Name==user.Lname && Pass==user.Lpass){
        alert("WELCOME USER")
    }
    
    else{alert("Invalid User")}

    return false
}