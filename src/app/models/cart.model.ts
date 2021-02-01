import { Product } from './product.model';

export interface Cart {
  cartItems: CartItem[];
}

export interface CartItem {
  product: Product;
  customValues: { [x: string]: string };
}
