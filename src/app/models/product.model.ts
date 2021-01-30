import { BaseModel } from './base.model';

export class Product extends BaseModel {
  name!: string;
  quantity!: number;
}
