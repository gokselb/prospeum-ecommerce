import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeModules } from './prime-modules';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { PagesRoutingModule } from './pages-routing.module';
import { NotificationService } from '../services/utils/notification.service';
import { components } from './index';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PagesRoutingModule, ...PrimeModules],
  declarations: [...components],
  exports: [...components],
  providers: [FormBuilder, MessageService, NotificationService, DialogService]
})
export class PagesModule {}
