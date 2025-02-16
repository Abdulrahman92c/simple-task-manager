import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }
  }
}
