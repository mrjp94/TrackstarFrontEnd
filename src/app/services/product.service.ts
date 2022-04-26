import { Injectable } from '@angular/core';
import {Product} from '../classes/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private Url = 'http://dexrestservice-env.eba-pkmu3ze3.us-east-2.elasticbeanstalk.com/api';
  private Url = 'http://localhost:8000/api';
  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}
  productid: Number = 0; 
  productname: String = "";
  constructor(private httpClient: HttpClient) { 

  }

  async getAllProducts() {
    try {
      const data: any = await this.httpClient.get(this.Url).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }
  
  async addProduct(product:Product)
  {
    try {
      const data: any = await this.httpClient.post(this.Url + "/addproduct", JSON.stringify(product),this.headers).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async deleteProduct(id: Number)
  {
    try {
      const data: any = await this.httpClient.delete(this.Url+"/removeproduct/"+id.toString()).toPromise();
      return this.getAllProducts();
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async getProductById(id: Number)
  {
    try {
      const data: any = await this.httpClient.get(this.Url+"/getproduct/"+id.toString()).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async getProductByName(name: String)
  {
    try {
      const data: any = await this.httpClient.get(this.Url+"/getproductbyname/"+name.toString()).toPromise();
      return data;
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  async updateProduct(product)
  {
    try {
      const NameData: any = await this.httpClient.get(this.Url+"/getproductbyname/"+product.Name.toString()).toPromise();
      if (NameData.length > 0)
      {
        if (NameData[0].ProductID != product.ProductID){
          return false
        }
      }
      const data: any = await this.httpClient.put(this.Url+"/updateproduct",JSON.stringify(product),this.headers).toPromise();
      return true; 
    } catch (error) {
      console.error(`Error occurred: ${error}`);
    }
  }

  setProductname(name: String)
  {
    this.productname = name; 
  }

  getProductname() {  
    return this.productname;  
  }  
}
