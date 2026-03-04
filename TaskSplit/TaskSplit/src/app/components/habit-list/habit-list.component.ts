import { Component, ElementRef, OnInit, inject, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Habit } from '../../interfaces/habit';

@Component({
  selector: 'app-habit-list',
  imports: [],
  templateUrl: './habit-list.component.html',
  styleUrl: './habit-list.component.css'
})
export class HabitListComponent implements OnInit {
  habitList: Habit[] = [];
  newHabit: string = '';
  @ViewChild('habitText') habitInputRef: ElementRef<HTMLInputElement> = null!;

  constructor() {}

  // pull from server and place it to local storage
  ngOnInit(): void {
    const storedHabitList = localStorage.getItem('habitList');
    if (storedHabitList) {
      this.habitList = JSON.parse(storedHabitList);
    }
  }

  // Need to break down habit before adding it to habitList
  addHabit(text: string, remindTime: Date): void {
    if (text.trim() !== '') {
      const newHabitItem: Habit = {
        id: Date.now(),
        habit: text.trim(),
        completed: false,
        subhabits: [],
        remindTime: remindTime,
      }
      this.habitList.push(newHabitItem);
      this.habitInputRef.nativeElement.value = '';
      this.saveHabitList();
    }
  }

  deleteHabit(id: number): void {
    this.habitList = this.habitList.filter(item => item.id !== id);
    this.saveHabitList();
  }

  completeHabit(id: number): void {
    const habitItem = this.habitList.find(item => item.id === id);
    if (habitItem) {
      habitItem.completed = !habitItem.completed;
      this.saveHabitList();
    }
  }

  // Need to save habit list to the server
  saveHabitList(): void {
    localStorage.setItem('habitList', JSON.stringify(this.habitList));
  }

}
