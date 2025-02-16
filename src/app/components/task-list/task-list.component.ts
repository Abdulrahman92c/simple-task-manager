import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = this.tasks;
  }

  applyFilter(status: string): void {
    if (status === 'all') {
      this.filteredTasks = this.tasks;
    } else if (status === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (status === 'pending') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.filteredTasks = this.filteredTasks.filter(task => task.id !== id);
  }
}
