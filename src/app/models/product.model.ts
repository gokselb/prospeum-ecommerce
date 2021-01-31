import { BaseModel } from './base.model';

export class Product extends BaseModel {
  name: string;
  quantity: number;
  imgUrl: string;
  colors: string[];
  sizes: number[];
  price: number;
  discount?: number;
}
