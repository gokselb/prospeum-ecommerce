import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { MainLayoutComponent } from './layout/main-layout.component';
import { MenuLayoutComponent } from './layout/menu/menu-layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export * from './auth/login/login.component';
export * from './auth/register/register.component';
export * from './home/home.component';
export * from './home/product/product.component';
export * from './layout/main-layout.component';
export * from './layout/menu/menu-layout.component';
export * from './product-detail/product-detail.component';


export const components: any[] = [
  MainLayoutComponent,
  MenuLayoutComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  ProductComponent,
  ProductDetailComponent
];