import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductDataService } from 'src/app/services/data/product.data.service';

@Component({
  selector: 'app-pe-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public products$: Observable<Product[]>;
  public user$: Observable<User>;
  public constructor(private productService: ProductDataService, private authService: AuthService) {
    this.user$ = this.authService.user;
    this.products$ = this.productService.getAll();
  }
}
