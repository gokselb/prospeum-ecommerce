import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { RouterStateUrl } from 'src/app/services/store';
import { RouterService } from 'src/app/services/store/router.service';

@Component({
  selector: 'app-pe-home-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  public product: Product;
  public constructor(private routerService: RouterService, private productService: ProductDataService) {
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
}
