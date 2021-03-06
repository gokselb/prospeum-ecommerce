import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModules } from './prime-modules';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { PagesRoutingModule } from './pages-routing.module';
import { NotificationService } from '../services/utils/notification.service';
import { components } from './index';
import { CartService } from '../services/store/cart/cart.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PagesRoutingModule, ...PrimeModules],
  declarations: [...components],
  exports: [...components],
  providers: [FormBuilder, MessageService, NotificationService, DialogService, CartService, ConfirmationService]
})
export class PagesModule {}
