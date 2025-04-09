function sin(){
    let person={
        Name : document.querySelector("#name").value,
        Contact : document.querySelector("#cont").value,
        City : document.querySelector("#city").value,
        Pass : document.querySelector("#pass").value,
    }

    localStorage.setItem("udata",JSON.stringify(person))
    let user =JSON.parse(localStorage.getItem('udata'))

    console.log(user)

    location.href="login.html"
    return false
}

function lin(){
       let Lname = document.querySelector("#lname").value
       let Lpass = document.querySelector("#lpass").value

       let user =JSON.parse(localStorage.getItem('udata'))

    if(user.Name==Lname && user.Pass==Lpass){
        alert("WELCOME USER");
        console.log(user.Name , user.Pass)

    }
    
    else{alert("Invalid User")}

    return false
}
