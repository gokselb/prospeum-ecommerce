import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './home/product-form/edit-product/edit-product.component';
import { NewProductComponent } from './home/product-form/new-product/new-product.component';
import { ProductFormComponent } from './home/product-form/product-form.component';
import { ProductComponent } from './home/product/product.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { MenuCartComponent } from './layout/menu/cart/cart.component';
import { MenuLayoutComponent } from './layout/menu/menu-layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export * from './auth/login/login.component';
export * from './auth/register/register.component';
export * from './home/home.component';
export * from './home/product-form/new-product/new-product.component';
export * from './home/product/product.component';
export * from './layout/main-layout.component';
export * from './layout/menu/cart/cart.component';
export * from './layout/menu/menu-layout.component';
export * from './product-detail/product-detail.component';
export * from './home/product-form/product-form.component';
export * from './home/product-form/edit-product/edit-product.component';

export const components: any[] = [
  MainLayoutComponent,
  MenuLayoutComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  ProductComponent,
  ProductDetailComponent,
  NewProductComponent,
  ProductFormComponent,
  MenuCartComponent,
  EditProductComponent
];
