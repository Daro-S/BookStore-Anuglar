import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductLoggedInComponent } from './view-product-logged-in.component';

describe('ViewProductLoggedInComponent', () => {
  let component: ViewProductLoggedInComponent;
  let fixture: ComponentFixture<ViewProductLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductLoggedInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
