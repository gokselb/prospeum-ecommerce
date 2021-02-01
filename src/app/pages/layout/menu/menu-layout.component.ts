import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { RouterService } from 'src/app/services/store/router';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-pe-layout-menu',
  templateUrl: './menu-layout.component.html'
})
export class MenuLayoutComponent implements OnInit {
  public items!: MenuItem[];
  public user: User;
  public isLoginPage = false;

  public constructor(private authService: AuthService, private routerService: RouterService) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      }
    ];
    this.watchUser();
    this.watchRoute();
  }
  private watchRoute(): void {
    this.routerService.currentRoute().subscribe(result => {
      this.isLoginPage = result.url.indexOf('login') > -1;
    });
  }
  private watchUser(): void {
    this.authService.user.subscribe(val => {
      this.user = val;
    });
  }
}
