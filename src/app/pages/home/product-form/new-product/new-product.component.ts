import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-home-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent {
  public formGroup: FormGroup;

  public constructor(
    private fb: FormBuilder,
    private productService: ProductDataService,
    public ref: DynamicDialogRef
  ) {
    this.formGroup = this.fb.group({
      id: null,
      name: [null, Validators.required],
      quantity: [0, Validators.required],
      imgUrl: ['https://placekitten.com/200/200', Validators.required],
      colors: null,
      sizes: null,
      price: [null, Validators.required],
      discount: null
    });
  }

  public onSubmit(event: Product): void {
    this.productService.create(event).subscribe(result => {
      if (result) {
        this.ref.close();
      }
    });
  }
}
