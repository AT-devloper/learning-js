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
        
        </tr>
        
        `
    })
}

fetchData()