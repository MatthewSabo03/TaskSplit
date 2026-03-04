import { Component, ElementRef, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../interfaces/task';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
/* 
  Need to change this so it both:
  - Implements the breakdown function and shows it 
  - Saves the local storage information to the users account (save local storage JSON)

  Also needs to look WAY better but thats a problem for another day
*/
export class TaskListComponent implements OnInit {
  taskList: Task[] = [];
  newTask: string = '';
  @ViewChild('taskText') todoInputRef: ElementRef<HTMLInputElement> = null!;

  constructor() {}

  // pull from server and place it to local storage
  ngOnInit(): void {
    const storedTaskList = localStorage.getItem('taskList');
    if (storedTaskList) {
      this.taskList = JSON.parse(storedTaskList);
    }
  }

  // Need to break down task before adding it to taskList
  addTask(text: string): void {
    if (text.trim() !== '') {
      const newTaskItem: Task = {
        id: Date.now(), //Change later
        task: text.trim(),
        completed: false,
        subtasks: [],
      };
      this.taskList.push(newTaskItem);
      this.todoInputRef.nativeElement.value = '';
      this.saveTaskList();
    }
  }

  deleteTask(id: number): void {
    this.taskList = this.taskList.filter(item => item.id !== id);
    this.saveTaskList();
  }

  completeTask(id: number): void {
    const taskItem = this.taskList.find(item => item.id === id);
    if (taskItem) {
      taskItem.completed = !taskItem.completed;
      this.saveTaskList();
    }
  }

  // Need to save task list to the server
  saveTaskList(): void {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }
}
