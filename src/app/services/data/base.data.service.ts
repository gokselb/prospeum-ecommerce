import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { BaseModel } from '../../models/base.model';

export class BaseDataService<T extends BaseModel> {
  private collectionName!: string;

  constructor(private firestore: AngularFirestore, typeAccess: new () => T) {
    this.collectionName = typeAccess.name;
  }

  getAll(): Observable<T[]> {
    return this.firestore.collection<T>(this.collectionName).valueChanges();
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
