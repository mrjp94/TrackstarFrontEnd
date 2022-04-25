export class Product {
    ProductID: number;
    Name: string;
    Description: string;
    Price: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
