import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductinfoComponent } from './productinfo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService} from '../../services/product.service';
import { MatInputModule,
  MatCardModule,
  MatButtonModule} from '@angular/material';

describe('ProductinfoComponent', () => {
  let component: ProductinfoComponent;
  let fixture: ComponentFixture<ProductinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductinfoComponent ],
      providers:[
        ProductService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit when all forms are filled and valid', () => {
    component.productForm.setValue({productName: "Juan", description: "Pablo", price:"jpsj@price.com"}); 
    expect(component.productForm.valid).toEqual(true); 
  });
});
