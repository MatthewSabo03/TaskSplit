import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createForm();
  }

  createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
    console.log('LOGIN FORM SUCCESSFUL');
  }

  showPassword(): void {
    
  }
}
