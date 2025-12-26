import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-register-cat',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './register-cat.html',
  styleUrl: './register-cat.scss',
})
export class RegisterCat {
  registerCatForm: FormGroup
  name = new FormControl('');
  age = new FormControl('')
  breed = new FormControl(''); 

  constructor(
     private fb: FormBuilder
  ) {
    this.registerCatForm = this.fb.group({
      name: '',
      age: '',
      breed: ''
    });
  }

  registerCat() {
    console.log('Registering cat:', this.registerCatForm.value);
  }
}
