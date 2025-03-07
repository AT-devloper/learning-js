function validate(){
    let name =document.querySelector('#name').value
    let email =document.querySelector('#email').value
    let age =document.querySelector('#age').value

    if(name==""){               //.focus are predefinfunctio
        // alert("Enter your name")
        let ero = document.querySelector('#errorname')
        ero.innerHTML="please enter name"
        document.querySelector('#name').focus() 
        return false
    }
    else if(email==""){
        alert("Enter your email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('@gmail.com'))||(yahoo.includes('yahoo.com'))){
        alert("Enter email with @gmail.com")
        document.querySelector('#email').focus()
        return false
    }


    else if(age==""){
        alert("Enter your age")
        document.querySelector('#age').focus()
        return false 
    }
    else if(isNaN(age)){
        alert("Enter your age in number")
        document.querySelector('#age').focus()
        return false 
    }
    else if (age.length<100){
        alert("please enter your age under 100 years")
        document.querySelector('#age').focus()
        return false 

    }




}