import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';
import { ProductDataService } from './services/data/product.data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items!: Product[];
  constructor(private productDataService: ProductDataService) {
    this.productDataService.getAll().subscribe(result => {
      this.items = result;
    });
    this.productDataService
      .create({
        id: 'asd',
        name: 'New Product',
        quantity: 5
      })
      .subscribe(console.log);
  }
}
