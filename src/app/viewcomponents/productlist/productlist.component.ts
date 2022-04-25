import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import {ProductService} from '../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  displayedColumns = ['ProductID', 'Name', 'Description', 'Price','actions'];
  productList = new MatTableDataSource<any>([]);
  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts(); 
  }

  getProducts()
  {
    this.service.getAllProducts().then(data => {
      this.productList = data;
    });
  }

  deleteProduct(productid)
  {
    this.service.deleteProduct(productid).then(data => {
      this.productList = data;
    });
  }

  updateProduct(productname: String)
  {
    this.service.setProductname(productname); 
    this.goToMain(); 
  }

  newProduct()
  {
    this.goToMain(); 
  }

  goToMain()
  {
    this.router.navigate(['']);
  }

}
