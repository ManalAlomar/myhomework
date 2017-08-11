import { forEach } from '@angular/router/src/utils/collection';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { Product } from './Product';
@Component({
  selector: 'app-mybill',
  templateUrl: './mybill.component.html',
  styleUrls: ['./mybill.component.css']
})
export class MybillComponent implements OnInit {
 sum: number;
 nm: String;
 pp: number;
items: Item[] = [];
products: Product[] = [];
  complete: boolean;
  constructor() {
    this.products.push(new Product('chocolate', 400));
    this.products.push(new Product('Milk', 3000));
    this.products.push(new Product('Cheese', 550));
    this.products.push(new Product('Bread', 75));
    this.products.push(new Product('Sugar', 450));
    this.products.push(new Product('Meat', 2500));
    this.products.push(new Product('egges', 1400));
this.nm = ''; this.pp = 0;
this.sum = 0;
this.complete = false;
   }
  addNewItem(name: string, price: number , count: number) {
  this.items.push(new Item(name, price, count));
  this.sum = this.sum + ( count * price);

  }

  removeItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
    this.sum = this.sum - (item.count * item.price);

  }
  editItem(item: Item , m: number) {
    // tslint:disable-next-line:no-shadowed-variable
    this.items.forEach(i => { if ( i === item) {this.sum = this.sum - (i.count * i.price);
      i.count = m;
      this.sum = this.sum + (i.count * i.price);
    } else { i.count = i.count; } }  );
  }
 calcu(com: boolean) {
this.complete = com ;
}
  onlyNumberKey(e) {
    return (e.charCode === 8 || e.charCode === 0) ? null : e.charCode >= 48 && e.charCode <= 57;
  }
  printsum() {
    return ` The invoice value is: ${this.sum}` ;
  }
setpro( nnmm: String, ppp: number) {this.nm = nnmm; this.pp = ppp; }
getname() {return this.nm; }
getprice() { return this.pp; }
  onClick($event) { }

  ngOnInit() {
  }

}
