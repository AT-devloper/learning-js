function dt(){
    let uda={
        Lname : document.querySelector("#name").value,
        Lpass : document.querySelector("#pass").value,

    }
    
    localStorage.setItem("usdata",JSON.stringify(uda))

    let user = JSON.parse(localStorage.getItem('usdata'))

    if(Name==Lname && Pass == Lpass){
        location.href="27marstri.html"
    }
    else {
        alert("invalid !!")
    }

    return false
}