import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { StandardMessages } from 'src/app/enums';
import { NotificationTypes } from 'src/app/enums';
import { IndexedValue, Product } from 'src/app/models/product.model';
import { ProductDataService } from 'src/app/services/data/product.data.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-home-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() public formGroup: FormGroup;
  @Input() public colors: IndexedValue<string>[] = [];
  @Input() public sizes: string[] = [];
  @Output() public submitForm: EventEmitter<Product> = new EventEmitter();

  public constructor(private notificationService: NotificationService, private productService: ProductDataService) {}

  public addColor(): void {
    const newIndex = this.colors.length;
    this.colors.push({
      index: newIndex,
      value: '#fffff'
    });
  }

  public removeColor(index: number): void {
    this.colors.splice(index, 1);
  }

  public onSubmit(): void {
    if (!this.formGroup.valid) {
      this.notificationService.notify(NotificationTypes.Error, {
        detail: StandardMessages.ValidationError
      });
      return;
    }
    if (this.colors.length === 0) {
      this.notificationService.notify(NotificationTypes.Info, {
        detail: StandardMessages.AddColor
      });
      return;
    }
    this.formGroup.controls.colors.patchValue(this.colors);
    this.formGroup.controls.sizes.patchValue(
      this.sizes.map((value, index) => {
        return { index, value } as IndexedValue<string>;
      })
    );

    this.submitForm.emit(this.formGroup.value);
  }
}
