function fetchData(){
    // Asking for a return in json
    
    fetch("https://reqres.in/api/users")
        .then(response =>{
            return response.json();
    })
    .then(data => {
        console.log(data.data);
        const html = data.data
            .map(user => {
            return `
            <div class ="people">
            <p> First Name: ${user.first_name}</p>
            <p> Email: ${user.email}</p>
            <p> Last Name: ${user.last_name}</p>
            <p> Id: ${user.id}</p>
            <img src="${user.avatar}" alt=""></img>
            
            </div>
            `;
        })
        .join("");
        console.log(html);
       
        document.getElementById('app').innerHTML = html;
        
    }); 
} 

fetchData();