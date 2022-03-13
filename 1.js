const inputData=document.getElementById("input");
const btnData=document.getElementById("btnTask");
const todoTask=document.querySelector(".taskDescription");

let tasks;
let todoItemElements=[];
!localStorage.tasks ? tasks=[] : tasks =JSON.parse(localStorage.getItem('tasks'));


function Task(taskDesc){
    this.taskDesc=taskDesc;
    this.completed=false;
}
const createItem=(task,index) => {
    return `
            <div class="todoItem ${task.completed ? 'checked':''} " >
                <div class="buttons">
                    <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.completed ?  'checked':''} height="25px">
                </div>
                <div class="descItem">${task.taskDesc}</div>
                <div class="buttons">
                    <button onclick="deleteTask(${index})" class="btn-delete" height="45px">x</button>
                </div>
                <div class="changeDesc"> 
                    <button onclick="changeTask(${index})" class="btn-change height="45px>-</button>
                </div>
            </div>
            `;
}
const fillItem=()=>{
    todoTask.innerHTML="";
    if(tasks.length>0){
        tasks.forEach((item,index)=>{
            todoTask.innerHTML+=createItem(item,index);
        })
        todoItemElements=document.querySelectorAll('.todoItem');
    }
}
fillItem();
const updateLocal= () => {
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function addingTask(str){
    tasks.push(new Task(str));
    
}

const completeTask=index=>{
    // console.log(index);
    tasks[index].completed=!tasks[index].completed;
    if(tasks[index].completed){
        todoItemElements[index].classList.add('checked');

    }else{
        todoItemElements[index].classList.remove('checked');
    }
    updateLocal();
    fillItem();
}
const deleteTask=index =>{
    tasks.splice(index,1);
    updateLocal();
    fillItem();
}
btnData.addEventListener("click",() => {
    tasks.push(new Task(input.value));
    updateLocal();
    fillItem();
    input.value='';
});
const changeTask=index=>{
    tasks[index].taskDesc=inputData.value;
    updateLocal();
    fillItem();
    input.value='';
}

