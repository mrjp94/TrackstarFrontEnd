import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './classes/product';
import { ProductinfoComponent } from './viewcomponents/productinfo/productinfo.component'; 
import { ProductlistComponent } from './viewcomponents/productlist/productlist.component'; 


const routes: Routes = [
{  path: 'productinfo',
  component: ProductinfoComponent},
  {  path: 'productlist',
  component: ProductlistComponent,},
  { path: '**', redirectTo: 'productlist' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
