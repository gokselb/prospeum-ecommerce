import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { UserFacade } from './auth/users';
import { ProductDataService } from './data/product.data.service';
import { CustomSerializer, reducers } from './store';
import { RouterService } from './store/router.service';

@NgModule({
  imports: [
    EffectsModule.forRoot([UserFacade]),

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  providers: [UserFacade, ProductDataService, RouterService]
})
export class ServiceModule {}
