import { Injectable } from '@angular/core';
//http req
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskserviceService {

  constructor(private http: Http) { }
  addTaskReq(newTask){
     //create http headers object
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/task', newTask, {headers: headers}).map(res => res.json());
  }

  getAllTasks(){
    return this.http.get('http://localhost:3000/api/tasks').map(res => res.json());
  }

  updateTask(newTask,id){
    //create http headers object
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/task/'+id, newTask, {headers: headers}).map(res => res.json());

  }

  taskIsDone(newTask,id){
    //create http headers object
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('http://localhost:3000/api/task/'+id, newTask, {headers: headers}).map(res => res.json());

  }

  deleteTask(id){
    return this.http.delete('http://localhost:3000/api/task/'+id).map(res => res.json());
  }
}
