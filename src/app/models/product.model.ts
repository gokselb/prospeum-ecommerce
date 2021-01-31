import { BaseModel } from './base.model';

export class Product extends BaseModel {
  name: string;
  quantity: number;
  imgUrl: string;
  colors: IndexedValue<string>[];
  sizes: IndexedValue<string>[];
  price: number;
  discount?: number;
}

export interface IndexedValue<T> {
  index: number;
  value: T;
}
