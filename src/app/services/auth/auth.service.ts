import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { StandardMessages } from 'src/app/enums';
import { NotificationTypes } from 'src/app/enums';
import { User } from 'src/app/models/user.model';
import { Credentials } from '../../models/credentials.model';
import { UserDataService } from '../data/user.data.service';
import { loggedIn } from '../store/user';
import { NotificationService } from '../utils/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<User>;
  public currentUser: User;
  constructor(
    private notificationService: NotificationService,
    private userDataService: UserDataService,
    private store: Store<{ user: User }>
  ) {
    this.user = this.store.select('user').pipe(map(val => (this.currentUser = val)));
  }

  public getUser(): Observable<User> {
    return null;
  }

  login(credentials: Credentials): Observable<User> {
    return this.userDataService.collectionObs.pipe(
      map(result => {
        const user = result.find(val => val.email === credentials.email && val.password === credentials.password);
        if (!user) {
          this.notificationService.notify(NotificationTypes.Error, {
            summary: StandardMessages.UserNotFound
          });
        }
        this.store.dispatch(loggedIn({ user }));
        return user;
      })
    );
  }

  register(credentials: User): Observable<boolean> {
    return this.userDataService.create(credentials).pipe(
      catchError(err => {
        this.notificationService.notify(NotificationTypes.Error, {
          summary: StandardMessages.Error,
          detail: err?.message
        });
        return throwError(err);
      })
    );
  }
}
