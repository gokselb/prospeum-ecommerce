import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { UserFacade, userReducer } from './auth/users';
import { ProductDataService } from './data/product.data.service';

@NgModule({
  imports: [
    EffectsModule.forRoot([UserFacade]),

    StoreModule.forRoot({}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [UserFacade, ProductDataService]
})
export class ServiceModule {}
