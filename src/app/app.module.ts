import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FilterComponent } from './components/filter/filter.component';
import { TaskStatusDirective } from './directives/task-status.directive';


const routes: Routes = [
  { path: '', component: TaskListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    AddTaskComponent,
    FilterComponent,
    TaskStatusDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
