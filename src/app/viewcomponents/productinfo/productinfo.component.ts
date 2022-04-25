import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {
  productForm: FormGroup;
  title: String = "Create Product";
  product: Product;
  productname: String;
  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private router: Router
  ) {
    this.productname = this.service.getProductname();
    if (this.productname != "") {
      this.title = "Update Product";
    }
    else {
      this.title = "Create Product";
    }
  } 

  ngOnInit() {
    this.productForm = this.fb.group({
      Name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      Description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
      Price: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(20000)])]
    })
  
    if (this.productname != "") {
      this.service.getProductByName(this.productname).then(data => {
        this.product = data[0];
        this.productForm.controls["Name"].setValue(this.product.Name);
        this.productForm.controls["Description"].setValue(this.product.Description);
        this.productForm.controls["Price"].setValue(this.product.Price);
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid == true) {
      if (this.productname == "") {
        this.product = new Product({
          ProductID: null,
          Name: this.productForm.controls["Name"].value,
          Description: this.productForm.controls["Description"].value,
          Price: this.productForm.controls["Price"].value
        })
        this.service.getProductByName(this.product.Name).then(res => {
          if (res.length >= 1) {
            this.showNotUniqueNameDialog()
            return false;
          }
          else
          {
            this.service.addProduct(this.product).then(res => {
              this.goToProductList();
            });
          }
        });
      }
      else {
        this.product.Name = this.productForm.controls["Name"].value;
        this.product.Description = this.productForm.controls["Description"].value;
        this.product.Price = this.productForm.controls["Price"].value;
        this.service.updateProduct(this.product).then(data => {
          if (data == false) {
            this.showNotUniqueNameDialog()
            return false;
          }
          else
          {
            this.goToProductList();
          }
        });
      }
      this.service.setProductname("")
    }
    else {
      return false;
    }

  }

  goToProductList() {
    this.router.navigate(['/productlist']);
  }

  showNotUniqueNameDialog() {
    Swal.fire('Name unavailable', 'Product names are required to be unique, this name is already in use by another product.', 'error')
  }

}
