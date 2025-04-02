function data(){
    let person={
        Name : document.querySelector("#name").value,
        Contact : document.querySelector("#cont").value,
        City : document.querySelector("#city").value,
        Pass : document.querySelector("#pass").value,
    }

    localStorage.setItem("udata",JSON.stringify(person))

    let user = JSON.parse(localStorage.getItem('udata'))

    console.log(user.Name)
    console.log(user.Pass)

    location.href="login.html"
    return false
}