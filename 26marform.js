function data(){
    let person={
        Name : document.querySelector("#name").value,
        Age : document.querySelector("#age").value,
        Contact : document.querySelector("#cont").value,
    }

    localStorage.setItem("udata",JSON.stringify(person))

    let user = JSON.parse(localStorage.getItem('udata'))

    console.log(user.Name)

    alert("Data Submitted But Page Was Paused !!")
    return false
}