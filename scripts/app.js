     
     
    function saveData() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let id = document.getElementById('tz').value;
        let date = document.getElementById('date').value;
        let password = document.getElementById('password').value;
        const passExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        if(name.trim()=='' ||
            email.trim()== '' ||
            id.trim() == '' ||
            password == ''
            ) {
            alert('Please fill out the empty input box');
            return;
        } 

        else if (!/^[A-Za-z\s]*$/.test(name)) {
            alert('Name must include at least two letters!');
            return;
        }

        else if (isNaN(id)) {
            alert('Id must include only numbers 0-9!');
            return;
        }

        else if (!password.match(passExp)) {
            alert('Password must contain at least one capital letter & 8 characters at least');
            return;
        }

            alert('User was added successfully!');
        
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{return v.id==id})) {
            alert("duplicate data");
        } else {
            user_records.push({
            "name":name,
            "email":email,
            "id": id,
            "date": date
            });
        localStorage.setItem("users",JSON.stringify(user_records));
        }
    showData();
    }

    
    function showData() {
    document.getElementById("showUsers").innerHTML="";
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records) {
        for(let i=0;i<user_records.length;i++) {
            let addDiv=document.createElement('div');
            addDiv.className="row-items";
            addDiv.id = user_records[i].id;
            addDiv.innerHTML=`  <div> ${user_records[i].name} </div>
            <div> ${user_records[i].email}</div>
            <div>${user_records[i].id}</div>
            <div>${user_records[i].date}</div>
            <button id="${user_records[i].id}">delete</button>
            `;
            
            document.getElementById("showUsers").appendChild(addDiv);
        }


    }
    
    }
    
    // Delete all data
    
        
    showData();

    let addDiv=document.getElementById("showUsers");
    let delete_data = document.getElementById("clear_items");
    delete_data.onclick = () => {
            localStorage.clear();
            addDiv.remove();
            let newDivUsers = document.createElement('div');
            newDivUsers.className ="showUsers";
            document.getElementById("col date").appendChild(newDivUsers);
        }
    
  
          
