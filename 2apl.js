let fetchData= async()=>{

    let url="http://localhost:3000/hotel"

    let res = await fetch(url,{method:"GET"})

    let data = await res.json()

    console.log(data);

    let dfile=document.querySelector("#datafile")

    data.map((e)=>{
        dfile.innerHTML+=`
        <tr>
        
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.contact}</td>
        <td>${e.person}</td>
        <td>${e.price}</td>
        <td onclick="Del('${e.id}')"> Delete </td>
        <td onclick="Ffill('${e.id}')"> Update </td>
        
        </tr>
        
        `}
    )}

    let Del=(id)=>{
            let url=`http://localhost:3000/hotel/${id}`
            fetch(url,{method:"DELETE"})
    }


    let book=()=>{
        let inpname = document.querySelector('#name').value
        let inpage = document.querySelector("#age").value
        let inpcont = document.querySelector("#cont").value
        let inpper = document.querySelector("#per").value
        
        // let inadd=document.querySelector("#add").value
        // let incountry=document.querySelector("#country").value
    

        let url="http://localhost:3000/hotel"

        fetch(url ,{
            method :"POST",
            headers :{
                "Content-Type":"appliction/json"
            },
            body : JSON.stringify({
                    "name": inpname ,
                    "age": inpage,
                    "contact": inpcont,
                    "person": inpper,
                    "price":inpper*500,
                    // "address":inadd,
                    // "country":incountry
                })
        })

        location.href="2apl.html"
        return false
    }

    let Ffill=async(id)=>{

        let url=`http://localhost:3000/hotel/${id}`
        let response=await fetch(url,{method:"GET"})
        let data=await response.json()

        console.log(data);

        let Fmdata=document.querySelector("#showdata")
        Fmdata.innerHTML=` 
        
        Name : <input type="text" id="upname" value="${data.name}"> <br><br>
        Age : <input type="text" id="upage" value="${data.age}"> <br><br>
        Contact : <input type="text" id="upcont" value="${data.contact}"> <br><br>
        Person : <input type="text" id="upper" value="${data.person}"> <br><br>
        
        <input type="submit" value="Update" onclick="return Fupdate('${data.id}')">
      
        `


        
let Fupdate =()=>{
        let inpname = document.querySelector('#name').value
        let inpage = document.querySelector("#age").value
        let inpcont = document.querySelector("#cont").value
        let inpper = document.querySelector("#per").value
        
        let url="http://localhost:3000/hotel"

        fetch(url ,{
            method :"POST",
            headers :{
                "Content-Type":"appliction/json"
            },
            body : JSON.stringify({
                    "name": inpname ,
                    "age": inpage,
                    "contact": inpcont,
                    "person": inpper,
                    "price":inpper*500,
                    
                })
        })
}
}

// fetchData()