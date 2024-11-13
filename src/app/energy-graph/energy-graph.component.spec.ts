import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyGraphComponent } from './energy-graph.component';

describe('EnergyGraphComponent', () => {
  let component: EnergyGraphComponent;
  let fixture: ComponentFixture<EnergyGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnergyGraphComponent]
    });
    fixture = TestBed.createComponent(EnergyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
