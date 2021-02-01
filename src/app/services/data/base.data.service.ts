import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseModel } from '../../models/base.model';
import { getNewId } from '../utils';
import { LoadingService } from '../utils/loading.service';

export class BaseDataService<T extends BaseModel> {
  public collection: AngularFirestoreCollection<T>;
  public collectionObs: Observable<T[]>;
  private collectionName!: string;

  constructor(private firestore: AngularFirestore, collectionName: string, private loadingService: LoadingService) {
    this.collectionName = collectionName;
    this.collectionObs = this.firestore.collection<T>(this.collectionName).valueChanges();
    this.collection = this.firestore.collection<T>(this.collectionName);
  }

  getAll(): Observable<T[]> {
    const loadingRef = this.loadingService.start();
    // Query can be used in need as a second parameter to collection func.
    return this.collectionObs.pipe(
      map(val => {
        loadingRef.stop();
        return val;
      })
    );
  }

  getById(id: number): Observable<T> {
    const loadingRef = this.loadingService.start();
    // Query can be used in need as a second parameter to collection func.

    return this.collectionObs.pipe(
      map(result => {
        loadingRef.stop();
        return result.filter(val => val.id === id)[0];
      })
    );
  }

  create(model: T): Observable<boolean> {
    const loadingRef = this.loadingService.start();
    model.id = getNewId();

    return new Observable(obs => {
      this.collection.add(model).then(
        () => {
          loadingRef.stop();
          obs.next(true);
        },
        err => {
          loadingRef.stop();
          obs.error(err);
        }
      );
    });
  }
}
