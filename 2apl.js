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
        <td>${e.price*e.person}</td>
        <td onclick="Del('${e.id}')"> Delete </td>
        
        </tr>
        
        `}
    )}

    let Del=(id)=>{
            let url=`http://localhost:3000/hotel/${id}`
            fetch(url,{method:"DELETE"})
    }


    let Book=()=>{
        let inname = document.querySelector('#name').value; 
        let inage = document.querySelector("#age").value;
        let incont = document.querySelector("#cont").value;
        let inper = document.querySelector("#per").value;
        
        // let inadd=document.querySelector("#add").value
        // let incountry=document.querySelector("#country").value
    }

        let url="http://localhost:3000/hote"

        fetch(url ,
            {
            method :"POST",
            headers :{
                "Content-Type":"appliction/json"
            },
            body : JSON.stringify({
                    "name": inname ,
                    "age": inage,
                    "contact": incont,
                    "person": inper,
                    // "address":inadd,
                    // "country":incountry
                })
        })

        location.href="2apl.html"
        return false
//  fetchData()