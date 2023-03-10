$(document).ready(function () {
    
    $.get("http://localhost:3000/Employee", function (data) {
      console.log("Here i have the data", data); // arry of objects similar to arr in this filea
  
      // all your table code sits here
      for (let i = 0; i < data.length; i++) {
        // 1) to create a <tr> for every object in the array
        // template lieteral
        let department = JSON.parse(data[i].departments);
        const tr = `<tr>
        <td> <img style="height:20px;width:20px;cursor:pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTee1DMyd_CxOFk0quvMGTZG1ycKrGMxxPcEA&usqp=CAU"
        alt=""></td>
        <td>${data[i].name}</td>
         <td>${department.map((department) => {
           return `<span>${department}</span>`;
         })}</td>
           <td>${data[i].gender}</td>
            <td>${data[i].salary}</td>
            <td>${data[i].date}</td>
            <td>
            <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png">
            <img style="height:15px;width:15px;cursor:pointer" src="https://cdn-icons-png.flaticon.com/512/61/61456.png">     
            </td>
        </tr>`;

        $(".tbody").append(tr);
      }
      
      })
    });