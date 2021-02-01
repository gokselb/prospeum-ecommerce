import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/index.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/store/cart/cart.service';

@Component({
  selector: 'app-pe-layout-menu-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class MenuCartComponent {
  public user: Observable<User>;
  public cart: Observable<CartItem[]>;
  public totalPrice: number;

  public constructor(private authService: AuthService, private cartService: CartService) {
    this.user = this.authService.user;
    this.cart = this.cartService.cart.pipe(
      map(val => {
        this.totalPrice = val.cartItems
          .map(item =>
            item.product.discount ? item.product.price - (item.product.price * item.product.discount) / 100 : item.product.price
          )
          .reduce((a, b) => a + b, 0);
        return val.cartItems;
      })
    );
  }
}
