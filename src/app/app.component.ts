import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-pe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items!: Product[];
  constructor(
    // private productDataService: ProductDataService, 
    // public auth: AngularFireAuth
    ) {
    // this.productDataService.getAll().subscribe(result => {
    //   this.items = result;
    // });
    // this.productDataService
    //   .create({
    //     id: 'asd',
    //     name: 'New Product',
    //     quantity: 5
    //   })
    //   .subscribe(console.log);
    // setTimeout(() => {
    //   this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // }, 5000);
  }
}
