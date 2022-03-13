import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks : Task[];
  currentTask: Task;

  constructor(){
    this.newTasks=[];
    this.currentTask=new Task();
  }
  addToDo(){
    if(this.currentTask.title!==''){
      this.currentTask.id=this.newTasks.length+1;
      this.newTasks.push(this.currentTask);
      this.currentTask=new Task();
    }
  }

  ngOnInit(): void {
  }

}
