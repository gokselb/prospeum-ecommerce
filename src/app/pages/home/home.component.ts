import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';

@Component({
  selector: 'app-pe-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public products$: Observable<Product[]>;
  public constructor(private productService: ProductDataService) {
    this.products$ = this.productService.getAll();
  }
}
