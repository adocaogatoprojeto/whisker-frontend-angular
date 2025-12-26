import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ MatButtonModule, Header]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
