import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav'
import { navigationItems } from '../navigation/navigationItems';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  imports: [MatButtonModule, MatSidenavModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})
export class SideNav {
  @ViewChild('drawer') drawer!: MatSidenav;
  
  showFiller = false;
  navigationObjects = navigationItems;
  drawerOpened = true;

  toggle(item: any) {
    console.log('toggle', item);
    item.opened = !item.opened;
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  consoleTest() {
    console.log('CLICOU');
  }
}