import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-pe-layout-menu',
  templateUrl: './menu-layout.component.html'
})
export class MenuLayoutComponent implements OnInit {
  public items!: MenuItem[];
  public user: User;

  public constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      }
    ];
    this.watchUser();
  }

  private watchUser(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
