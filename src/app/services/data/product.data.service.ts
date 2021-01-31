import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../..//models/product.model';
import { LoadingService } from '../utils/loading.service';
import { BaseDataService } from './base.data.service';

@Injectable()
export class ProductDataService extends BaseDataService<Product> {
  constructor(firestore: AngularFirestore, loadingService: LoadingService) {
    super(firestore, 'Product', loadingService);
  }
}
