import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice/taskservice.service'; //auth servise

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskTitle: String;
  tasks:Object;

  constructor(private taskservice: TaskserviceService) { }

  ngOnInit() {
    this.taskservice.getAllTasks().subscribe(data =>{
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  addTask(){
    const newTask = {
      title: this.taskTitle,
      isDone: false
    }
  this.taskservice.addTaskReq(newTask).subscribe(data => {
    console.log(data);
    //update after adding task
    this.taskservice.getAllTasks().subscribe(data =>{
      this.tasks = data;
      console.log(this.tasks);
    });
  });
  }

  updateTask(newTitle,id){
    const updateTask = {
      title: newTitle,
      isDone: false
    }
    this.taskservice.updateTask(updateTask,id).subscribe(data => {
      console.log(updateTask);
      console.log(id);
    });
  }

  taskIsDone(id,value){
    const updateTask = {
      isDone: value
    }
    this.taskservice.taskIsDone(updateTask,id).subscribe(data => {
      //update after check done
      this.taskservice.getAllTasks().subscribe(data =>{
        this.tasks = data;
        console.log(this.tasks);
      });
    });
  }

  deleteTask(id){
    this.taskservice.deleteTask(id).subscribe(data => {
      console.log(data);
      //update after delele task
      this.taskservice.getAllTasks().subscribe(data =>{
        this.tasks = data;
        console.log(this.tasks);
      });
    });
  }
}
