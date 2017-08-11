export class Item {

name: String;
price: number ;
count: number;
constructor( name: string,  price: number, count: number) {
this.name = name;
this.price = price;
this.count = count;
  }
  toString() {

    return `   Name :[ ${this.name }  ] ---    Price :[ ${this.price} ]  ---  Count :[${this.count}] `;
  }
}
