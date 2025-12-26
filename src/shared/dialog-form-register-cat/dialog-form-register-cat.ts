import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../api/api.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-form-register-cat',
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatDatepickerModule],
  templateUrl: './dialog-form-register-cat.html',
  styleUrl: './dialog-form-register-cat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogFormRegisterCat {
  readonly dialogRef = inject(MatDialogRef<DialogFormRegisterCat>);
  registerCatForm: FormGroup
  name = new FormControl('');
  photoUrl = new FormControl('')
  gender = new FormControl('')
  birthDate = new FormControl('')
  description = new FormControl('')
  age = new FormControl('')
  breed = new FormControl('');
  color = new FormControl('');
  weight = new FormControl('');
  isVaccinated = new FormControl('');
  isNeutered = new FormControl('');

  birthDatePicker: any;

  constructor(
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.registerCatForm = this.fb.group({
      name: ['', Validators.required],
      photoUrl: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      description: ['', Validators.required],
      age: ['', Validators.required],
      breed: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      isVaccinated: ['', Validators.required],
      isNeutered: ['', Validators.required],
    });
  }

  registerCat() {
    return this.registerCatForm.value;
  }

  async onSubmit() {
    const registeredCatValue = this.registerCat();
    await this.api.postV1('cats', registeredCatValue, {}, true);
    this.dialogRef.close();
  }
}
