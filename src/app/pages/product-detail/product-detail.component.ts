import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { NotificationTypes, StandardMessages } from 'src/app/enums';

import { IndexedValue, Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { CartService } from 'src/app/services/store/cart/cart.service';
import { RouterService } from 'src/app/services/store/router';
import { NotificationService } from 'src/app/services/utils/notification.service';
import { EditProductComponent } from '../home/product-form/edit-product/edit-product.component';

@Component({
  selector: 'app-pe-home-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  public product: Product;
  public selectedColor: IndexedValue<string>;
  public selectedSize: string;

  public user: Observable<User>;
  public currentUser: User;
  public constructor(
    private routerService: RouterService,
    private productService: ProductDataService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService,
    private authService: AuthService
  ) {
    this.getProductId();
    this.user = this.authService.user;
    this.currentUser = this.authService.currentUser;
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
    if (!this.currentUser) {
      this.notificationService.notify(NotificationTypes.Info, {
        detail: StandardMessages.LoginToProceed
      });
      return;
    }
    if (!this.selectedColor) {
      this.notificationService.notify(NotificationTypes.Info, {
        detail: StandardMessages.SelectColor
      });
      return;
    }
    this.notificationService.notify(NotificationTypes.Success, {
      detail: StandardMessages.ProductAdded
    });
    this.cartService.addProduct({
      product: this.product,
      customValues: { Color: this.selectedColor.value, Size: this.selectedSize ? this.selectedSize : this.product.sizes[0].value }
    });
  }

  public deleteProduct(event: Event): void {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productService.delete(this.product);
        this.notificationService.notify(NotificationTypes.Success, {
          detail: StandardMessages.ProductDeleted
        });
        this.router.navigateByUrl('/');
      },
      reject: () => {
        this.notificationService.notify(NotificationTypes.Info, {
          detail: StandardMessages.Canceled
        });
      }
    });
  }

  public editProduct(): void {
    this.dialogService.open(EditProductComponent, {
      header: 'Edit product',
      data: {
        product: this.product
      }
    });
  }
}
