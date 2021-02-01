import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StandardMessages } from 'src/app/enums';
import { NotificationTypes } from 'src/app/models/notification-types.enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/services/utils/notification.service';

@Component({
  selector: 'app-pe-auth-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.createForm();
  }

  private createForm(): void {
    this.formGroup = this.fb.group({
      email: [null, Validators.email],
      password: null
    });
  }

  public login(): void {
    if (!this.formGroup.valid) {
      this.notificationService.notify(NotificationTypes.Error, {
        summary: StandardMessages.FormError,
        detail: StandardMessages.ValidationError
      });
    } else {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result) {
          this.router.navigateByUrl('/');
        }
      });
    }
  }
}
