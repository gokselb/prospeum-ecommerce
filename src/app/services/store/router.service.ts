import { Injectable } from '@angular/core';
import { SerializedRouterStateSnapshot } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterStateUrl } from './custom.serializer';
import { StoreRootState, getCurrentRouteState } from './router.reducers';

@Injectable()
export class RouterService {
  constructor(private store: Store<StoreRootState>) {}

  public currentRoute(): Observable<RouterStateUrl> {
    return this.store.pipe(
      select(getCurrentRouteState),
      map((value: any) => value as RouterStateUrl)
    );
  }
}
