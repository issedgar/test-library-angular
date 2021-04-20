import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EhcJoinPipeComponent } from './ehc-join-pipe.component';

describe('EhcJoinPipeComponent', () => {
  let component: EhcJoinPipeComponent;
  let fixture: ComponentFixture<EhcJoinPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EhcJoinPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EhcJoinPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
