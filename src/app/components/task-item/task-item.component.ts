import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTaskEvent = new EventEmitter<number>();

  markAsComplete(): void {
    this.task.completed = true;
  }

  deleteTask(): void {
    this.deleteTaskEvent.emit(this.task.id);
  }
}
