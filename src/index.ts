import {taskList } from "./taskList";
import { task } from "./task";

//let kalendar=new taskList(20, document.body);



const createDiv:HTMLDivElement=document.createElement("div");
createDiv.classList.add("createSection");
document.body.appendChild(createDiv);

const createTaskListDiv:HTMLDivElement=document.createElement("div");
createTaskListDiv.classList.add("createTaskList");
createDiv.appendChild(createTaskListDiv);

const createTaskListLbl:HTMLLabelElement=document.createElement("label");
createTaskListLbl.innerHTML="Pick date";
createTaskListDiv.appendChild(createTaskListLbl);

const dateInput:HTMLInputElement=document.createElement("input");
dateInput.type="date";
dateInput.style.marginBottom="5px";
dateInput.style.marginTop="5px";
createTaskListDiv.appendChild(dateInput);


const descLbl:HTMLLabelElement=document.createElement("label");
descLbl.innerHTML="Enter short description:";
createTaskListDiv.appendChild(descLbl);



const descInput:HTMLTextAreaElement=document.createElement("textarea");
descInput.rows=4;
descInput.cols=30;
descInput.style.marginTop="5px";
descInput.style.marginBottom="5px";
createTaskListDiv.appendChild(descInput);

const createtaskListBtn:HTMLButtonElement=document.createElement("button");
createtaskListBtn.innerHTML="Create";
createTaskListDiv.appendChild(createtaskListBtn);

const testDrawAllTasksBtn:HTMLButtonElement=document.createElement("button");
testDrawAllTasksBtn.innerHTML="Test - Redraw all";
testDrawAllTasksBtn.style.marginTop="5px";
createTaskListDiv.appendChild(testDrawAllTasksBtn);

const tasksDiv:HTMLDivElement=document.createElement("div");
tasksDiv.classList.add("taskView");
document.body.appendChild(tasksDiv);

let _taskList=new taskList(tasksDiv);

createtaskListBtn.onclick=(ev:MouseEvent)=>{
    if(descInput.value==="" || dateInput.value==="")
    {
        alert("Enter all informations");
        return;
    }
    _taskList.drawTile(new task(descInput.value, dateInput.value));
}

testDrawAllTasksBtn.onclick=(ev:MouseEvent)=>{
    _taskList.drawAllTasks();
}













