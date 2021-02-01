import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-pe-layout-menu-cart',
  templateUrl: './cart.component.html'
})
export class MenuCartComponent {
  public user: Observable<User>;
  public constructor(private authService: AuthService) {
    this.user = this.authService.user;
  }
}
