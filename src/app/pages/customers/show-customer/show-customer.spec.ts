import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomer } from './show-customer';

describe('ShowCustomer', () => {
  let component: ShowCustomer;
  let fixture: ComponentFixture<ShowCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
