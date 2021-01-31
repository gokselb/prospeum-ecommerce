import { Product } from '../models/product.model';
import { User } from '../models/user.model';

export interface AppState {
  post: Product;
  user: User;
}
