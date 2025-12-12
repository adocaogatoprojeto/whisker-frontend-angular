import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  loginForm: FormGroup;
  registerForm: FormGroup;
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  protected readonly title = signal('whisker-frontend-angular');

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.apiService.postV1('auth/login', { email, password }).then(async response => {
      this.router.navigate(['/dashboard']);
    }).catch(error => { 
      throw new Error('Login failed: ' + error.message);
    });
  }

  register() {
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    this.apiService.postV1('user/register', { name, email, password }).then(response => {
      console.log('Register Response:', response);
    }).catch(error => {
      console.error('Register Error:', error);
    });
  }
}
