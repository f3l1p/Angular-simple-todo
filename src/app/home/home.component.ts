import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Todo } from '../todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, FormsModule, NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  todoList: Todo[] = [];

  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newTodoItem: Todo = {
        id: Date.now(),
        title: this.newTask,
        completed: false,
      };

      this.todoList.push(newTodoItem);
      console.log(this.todoList);
      this.newTask = '';
    }
  }

  toggleComplete(index: number): void {
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed;
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);

    console.log(this.todoList);
  }
}
