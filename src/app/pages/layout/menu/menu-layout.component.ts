import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pe-layout-menu',
  templateUrl: './menu-layout.component.html'
})
export class MenuLayoutComponent implements OnInit {
  public items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      }
    ];
  }
}
