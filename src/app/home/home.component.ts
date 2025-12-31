import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Header } from '../header/header';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormRegisterCat } from '../../shared/dialog-form-register-cat/dialog-form-register-cat';
import { Carousel } from '../carousel/carousel';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatButtonModule, Header, Carousel]
})
export class HomeComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  constructor() { }

  ngOnInit() {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogFormRegisterCat, {
      width: '400px',
      height: '50dvh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
