import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: Task | undefined;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() {
    console.log('TaskItemComponent: constructor');
  }

  ngOnInit(): void {
    // fetch data from other resources here
    console.log('TaskItemComponent: ng in init');
  }

  ngOnChanges(): void {
    console.log('TaskItemComponent: ng on change');
  }

  ngOnDestroy(): void {
    console.log('TaskItemComponent: ng on destroy');
  }

  removeTask(index: number) {
    this.remove.emit(index);
  }

  isDoneChanged() {
    this.done.emit(this.task);
  }

}
// <!-- starting from creating new components until removing this from web page, we have many different types of states and events. that can be handled with methods.
//     and this methods called Lifecycles. They can be used using  the interfaces.
//  -->
// OnChanges - this interface (if we implement this) will be firstly used(after constructor) for creating and changing fields in component
// OnInit  - this interface(if we implement this) will be secondly used for fetching data from other components. And we can write
// ngOnInit() method the way that we can fetch data from other component
// OnDestroy - this interface is used to close opened components/things and delete the removed things, иначе страница будет вечно работать



// interface Animal {
//   run();
//
//   sleep();
// }
//
// class Dog implements Animal {
//   run() {
//   }
//
//   sleep() {
//   }
// }
//
// class Cat implements Animal {
//   run() {
//   }
//
//   sleep() {
//   }
// }
//--------------------------
// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Task } from '../tasks';
// @Component({
//   selector: 'app-task-item',
//   templateUrl: './task-item.component.html',
//   styleUrls: ['./task-item.component.css']
// })
// export class TaskItemComponent implements OnInit {
//   @Input() task: Task | undefined;
//   //EventEmitter() helps to send data from child to parent
//   @Output() remove= new EventEmitter();
//   // isDone:boolean;
//   constructor() { }

//   ngOnInit(): void {
//   }
//   removeTask(index:number){
//     this.remove.emit(index);
//   }
//   isDoneChanged(){

//   }

// }
