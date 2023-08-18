let count = 0;
document.getElementById("btn").addEventListener("click", function(){
    //get field value
    const inputField  = document.getElementById("value");
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    //create table data
    const tableRow = document.createElement("tr");
    tableRow.innerHTML =`
                    <td>${(count+= 1)}</td>
                    <td class="text-base font-semibold">${inputFieldValue}</td>
                    <td>
                    <button class="done-btn btn btn-success bg-green-400 mr-2 btn-xs">Done</button>
                    <button class="delete-btn btn btn-error bg-error-400 btn-xs">Delete</button>
                    </td>
                   `;
    const parentdiv = document.getElementById("newData");
    parentdiv.appendChild(tableRow);
    inputField.value = "";

    //delete table data
    const deleteBtn = document.querySelectorAll(".delete-btn");
    for(let btn of deleteBtn){
       btn.addEventListener("click",function(e){
        e.target.parentElement.parentElement.style.display = "none";
       });
    }
    //Done table data
    const doneBtn = document.querySelectorAll(".done-btn");
    for(let btn of doneBtn){
       btn.addEventListener("click",function(e){
        e.target.parentElement.parentElement.style.textDecoration = "line-through";
       });
    }
    //clear all button

    document.getElementById("clearAll").addEventListener("click",function(){
        
           tableRow.style.display ="none";
    })

})