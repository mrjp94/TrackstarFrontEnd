import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductinfoComponent } from './viewcomponents/productinfo/productinfo.component';
import { ProductlistComponent } from './viewcomponents/productlist/productlist.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DecimalDirective} from './helpers/decimal-directive'
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ProductinfoComponent,
    ProductlistComponent,
    DecimalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
