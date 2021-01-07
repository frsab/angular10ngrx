import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products = this.store.select(state => state.product);
   }
  addProduct(name, price) {
    // alert("name, price")//
    console.log("addProduct : ",name, price)
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price,
      },
    });
  }
  ngOnInit(): void {}
}
