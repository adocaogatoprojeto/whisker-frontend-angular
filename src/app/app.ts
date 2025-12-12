import { Component } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
