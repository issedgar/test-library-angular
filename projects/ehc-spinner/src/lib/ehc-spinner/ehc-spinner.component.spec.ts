import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhcSpinnerComponent } from './ehc-spinner.component';

describe('EhcSpinnerComponent', () => {
  let component: EhcSpinnerComponent;
  let fixture: ComponentFixture<EhcSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhcSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhcSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
