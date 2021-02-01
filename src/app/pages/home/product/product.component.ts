import { Component, Input } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Product } from 'src/app/models/product.model';
import { NewProductComponent } from '../product-form/new-product/new-product.component';

@Component({
  selector: 'app-pe-home-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isNewButton = false;

  public constructor(private dialogService: DialogService) {}
  public showNewProduct(): void {
    this.dialogService.open(NewProductComponent, {
      header: 'Add new product'
    });
  }
}
