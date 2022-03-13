import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task,tasks } from '../tasks';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | undefined;
  //EventEmitter() helps to send data from child to parent
  @Output() remove= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeTask(index:number){
    this.remove.emit(index);
  }

}
