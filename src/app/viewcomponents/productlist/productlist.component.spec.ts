import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductlistComponent } from './productlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from '../../classes/product';
import { ProductService} from '../../services/product.service';
import { MatInputModule,
  MatCardModule,
  MatButtonModule,
MatTableModule} from '@angular/material';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistComponent ],
      providers:[
        ProductService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
