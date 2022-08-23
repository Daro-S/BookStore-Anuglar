import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemInCartComponent } from './view-item-in-cart.component';

describe('ViewItemInCartComponent', () => {
  let component: ViewItemInCartComponent;
  let fixture: ComponentFixture<ViewItemInCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemInCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewItemInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
