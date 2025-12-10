import { Component, signal } from '@angular/core';
import { ApiService } from '../api/api.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  loginForm: FormGroup;
  protected readonly title = signal('whisker-frontend-angular');

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const username = this.loginForm.get('username')?.value; 
    const password = this.loginForm.get('password')?.value; 

    this.apiService.postV1('auth/login', { username, password }).then(response => {
      localStorage.setItem('x_access_token', response.x_access_token);
      console.log('Login Response:', response);
    }).catch(error => {
      console.error('Login Error:', error);
    });
  }
}
