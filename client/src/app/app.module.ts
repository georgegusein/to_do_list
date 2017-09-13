import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

import { TaskserviceService } from './taskservice/taskservice.service'; //auth servise

//forms
import { FormsModule } from '@angular/forms';
//HTTP
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
