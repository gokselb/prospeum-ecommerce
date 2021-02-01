import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/models/user.model';
import { LoadingService } from '../utils/loading.service';
import { BaseDataService } from './base.data.service';

@Injectable()
export class UserDataService extends BaseDataService<User> {
  constructor(firestore: AngularFirestore, loadingService: LoadingService) {
    super(firestore, 'User', loadingService);
  }
}
