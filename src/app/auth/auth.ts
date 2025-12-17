import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../api/api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogErrorDialog } from '../../shared/dialog-error/dialog-error';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss'],
})
export class Auth {
  loginForm: FormGroup;
  registerForm: FormGroup;
  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  protected readonly title = signal('whisker-frontend-angular');

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.apiService.postV1('auth/login', { email, password }).then(async response => {
      this.router.navigate(['/dashboard']);
    }).catch(error => { 
      this.openDialog('300ms', '200ms');
      throw new Error('Login failed: ' + error);
    });
  }

  register() {
    const username = this.registerForm.get('username')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    this.apiService.postV1('user/register', { username, email, password }).then(response => {
    }).catch(error => {
      this.openDialog('300ms', '200ms');
      throw new Error('Registration failed: ' + error);
    });
  }

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogErrorDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
