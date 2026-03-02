import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'TaskSplit';

  constructor(
    private router: Router, 
    private renderer: Renderer2, 
    @Inject(DOCUMENT) private document: Document
  ) {}
}
