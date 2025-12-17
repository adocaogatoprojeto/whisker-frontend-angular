import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'

@Component({
  selector: 'app-side-nav',
  imports: [MatButtonModule, MatSidenavModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  showFiller = false;
}
