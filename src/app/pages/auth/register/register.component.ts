import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StandardMessages } from 'src/app/enums';
import { NotificationTypes } from 'src/app/models/notification-types.enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-auth-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private notificationService: NotificationService) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      name: [null, Validators.required]
    });
  }

  public register(): void {
    if (!this.formGroup.valid) {
      this.notificationService.notify(NotificationTypes.Error, {
        summary: StandardMessages.FormError,
        detail: StandardMessages.ValidationError
      });
    } else {
      this.authService.register(this.formGroup.value).subscribe(
        val => {
          debugger;
        },
        val => {
          debugger;
        }
      );
    }
  }
}
