import { Component, Input } from '@angular/core';
import { NotificationTypes, StandardMessages } from 'src/app/enums';

import { IndexedValue, Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { CartService } from 'src/app/services/store/cart/cart.service';
import { RouterService } from 'src/app/services/store/router';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-home-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  public product: Product;
  public selectedColor: IndexedValue<string>;
  public selectedSize: string;
  public constructor(
    private routerService: RouterService,
    private productService: ProductDataService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    this.getProductId();
  }
  private getProductId(): void {
    this.routerService.currentRoute().subscribe(value => {
      if (value?.params?.id) {
        this.productService.getById(+value.params.id).subscribe(result => {
          this.product = result;
        });
      }
    });
  }

  public addToCart(): void {
    if (!this.selectedColor) {
      this.notificationService.notify(NotificationTypes.Info, {
        detail: StandardMessages.Error
      });
    }
    this.cartService.addProduct({
      product: this.product,
      customValues: { Color: this.selectedColor.value, Size: this.selectedSize ? this.selectedSize : this.product.sizes[0].value }
    });
  }
}
