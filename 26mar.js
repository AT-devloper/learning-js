// localStorage.setItem("Username","Ayush")
// localStorage.setItem("Userage",23)
// localStorage.setItem("Usercontact",123456)

// let name=localStorage.getItem("Username")
// console.log(name)

// let cont =localStorage.getItem("Usercontact")
// console.log(cont)


// localStorage.removeItem('Userage')

// localStorage.clear()

let ob={
    name:"Ayush",
    age:23,
    contact:123456,
    address:"BPL"
}

localStorage.setItem("Userdata",JSON.stringify(ob))

let user =JSON.parse(localStorage.getItem('Userdata'))
console.log(user); //all data
console.log(user.address) //Perticular data
