import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { components } from './index';
import { PagesRoutingModule } from './pages-routing.module';
import { PrimeModules } from './prime-modules';
import { NotificationService } from '../services/utils/notification.service';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, PagesRoutingModule, ...PrimeModules],
  declarations: [...components],
  exports: [...components],
  providers: [FormBuilder, MessageService, NotificationService]
})
export class PagesModule {}
