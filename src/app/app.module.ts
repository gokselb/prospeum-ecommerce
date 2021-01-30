import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDataService } from './services/data/product.data.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebase)],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
