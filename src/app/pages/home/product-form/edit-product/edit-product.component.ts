import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NotificationTypes, StandardMessages } from 'src/app/enums';
import { IndexedValue, Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-home-edit-product',
  templateUrl: './edit-product.component.html'
})
export class EditProductComponent implements OnInit {
  public formGroup: FormGroup;
  public colors: IndexedValue<string>[] = [];
  public sizes: string[] = [];
  public constructor(
    private fb: FormBuilder,
    private productService: ProductDataService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private notificationService: NotificationService
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
  ngOnInit(): void {
    const product: Product = this.config.data.product;
    this.colors = product.colors;
    this.sizes = product.sizes.map(val => val.value);
    this.formGroup.patchValue(product);
  }

  public onSubmit(event: Product): void {
    this.productService.update(event);
    this.ref.close();
    this.notificationService.notify(NotificationTypes.Success, {
      detail: StandardMessages.ProductUpdated
    });
  }
}
