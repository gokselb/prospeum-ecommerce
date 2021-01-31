import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseModel } from '../../models/base.model';
import { LoadingService } from '../utils/loading.service';

export class BaseDataService<T extends BaseModel> {
  private collectionName!: string;

  constructor(private firestore: AngularFirestore, typeAccess: new () => T, private loadingService: LoadingService) {
    this.collectionName = typeAccess.name;
  }

  getAll(): Observable<T[]> {
    const loadingRef = this.loadingService.start();
    // Query can be used in need as a second parameter to collection func.
    return this.firestore
      .collection<T>(this.collectionName)
      .valueChanges()
      .pipe(
        map(val => {
          loadingRef.stop();
          return val;
        })
      );
  }

  create(model: T): Observable<boolean> {
    return new Observable(obs => {
      this.firestore
        .collection<T>(this.collectionName)
        .add(model)
        .then(
          () => obs.next(true),
          err => obs.error(err)
        );
    });
  }
}
