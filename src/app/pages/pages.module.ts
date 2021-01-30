import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './index';
import { MenuLayoutComponent } from './layout/menu/menu-layout.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PrimeModules } from './prime-modules';

@NgModule({
  imports: [PagesRoutingModule, ...PrimeModules],
  declarations: [MainLayoutComponent, MenuLayoutComponent, LoginComponent],
  exports: [MainLayoutComponent]
})
export class PagesModule {}
