function dt(){
    let uda={
        Lname : document.querySelector("#name").value,
        Lpass : document.querySelector("#pass").value,

    }
    
    localStorage.setItem("usdata",JSON.stringify(uda))

    let user=JSON.parse(localStorage.getItem('usdata'))

    console.log(user.Lname)
    console.log(user.Lpass)

    if(Name==Lname && Pass==Lpass){
        alert("Success")
    }
    
    else{alert("Invalid !! ")}

    return false
}