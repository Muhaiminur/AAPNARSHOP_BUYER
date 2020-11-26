import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePolicyComponent } from './exchange-policy.component';

describe('ExchangePolicyComponent', () => {
  let component: ExchangePolicyComponent;
  let fixture: ComponentFixture<ExchangePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
