import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { StandardMessages } from 'src/app/enums';
import { NotificationTypes } from 'src/app/models/notification-types.enum';
import { Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-home-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  public formGroup: FormGroup;
  public colors: string[] = [];

  public constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
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

  public addColor(): void {
    this.colors.push('');
  }

  public removeColor(index: number): void {
    this.colors.splice(index, 1);
  }

  public onSubmit(): void {
    this.formGroup.controls.colors.patchValue(this.colors);
    if (!this.formGroup.valid) {
      this.notificationService.notify(NotificationTypes.Error, {
        detail: StandardMessages.ValidationError
      });
    } else {
      this.productService.create(this.formGroup.value).subscribe(result => {
        if (result) {
          this.ref.close();
        }
      });
    }
  }
}
