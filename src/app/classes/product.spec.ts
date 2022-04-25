import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });

  it('Should assign values to new product object', () => 
  {
    let NewProduct = new Product({
      productName: 'Juan Pablo',
      description: 'Salcedo',
      price: 'JPS@price.com'
    });
    expect(NewProduct.productName).toEqual('Juan Pablo'); 
    expect(NewProduct.description).toEqual('Salcedo');
    expect(NewProduct.price).toEqual('JPS@price.com');
  })
});
