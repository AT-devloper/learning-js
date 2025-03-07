function fdata(){
    let name =document.querySelector('#name').value
    let pass=document.querySelector('#pass').value
    let contect=document.querySelector('#contect').value

    if(name==""){    
        alert("Enter your name")
        document.querySelector('#name').focus() 
        return false
    }
    

    else if (contect==""){
        alert("Enter your Contect number")
        document.querySelector('#contect').focus() 
        return false
    }
    else if(isNaN(contect)){
        alert("Enter your contect number")
        document.querySelector('#contect').focus()
        return false 
    }
    else if(contect.length>10 || contect.length<10){
        alert("Enter 10 digit contect number")
        document.querySelector('#contect').focus()
        return false 
    }


    else if (pass==""){
        alert("Enter your password")
        document.querySelector('#pass').focus() 
        return false
    }
    else if(!(pass.match(/[!@#$%^&*()_+]/))){
        alert("please include special charactor in password ")
        document.querySelector('#pass').focus() 
        return false
    }

   


}