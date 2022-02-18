const inputData=document.getElementById("input");
const btnData=document.getElementById("btnTask");
const todoTask=document.querySelector(".taskDescription");

let tasks=[];

function Task(taskDesc){
    this.taskDesc=taskDesc;
    this.completed=false;
}
const createItem=(task,index) => {
    return `
            <div class="todoItem">
                <div class="buttons">
                    <input class="btn-complete" type="checkbox" height="25px">
                </div>
                <div class="descItem">${task.taskDesc}</div>
                <div class="buttons">
                    <img class="btn-delete" src="box.png" width="14px"> 
                </div>
            </div>`;
}
const fillItem = () => {
    todoTask.innerHTML="";
    if(tasks.length>0){
        tasks.forEach((item,index)=>{
            todoTask.innerHTML+=createItem(item,index);
        })
    }
}
function addingTask(str){
    tasks.push(new Task(str));
    
}


// btnData.onclick="addingTask()";
btnData.addEventListener("click",addingTask(inputData.value));

