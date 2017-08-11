export class Product {

  name: String;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  toString() {
    return `   Name :[ ${this.name}  ] -    Price :[ ${this.price} ]   ]  `;
  }
}
