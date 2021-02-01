import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './auth/auth.guard';

import { ProductDataService } from './data/product.data.service';
import { UserDataService } from './data/user.data.service';
import { reducers } from './store';
import { CustomSerializer, RouterService } from './store/router';

@NgModule({
  imports: [

    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ],
  providers: [ProductDataService, UserDataService, RouterService, AuthGuardService]
})
export class ServiceModule {}
