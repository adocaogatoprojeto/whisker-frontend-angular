import { Component } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { RouterOutlet } from '@angular/router';
import { SideNav } from "./side-nav/side-nav";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule, SideNav],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
