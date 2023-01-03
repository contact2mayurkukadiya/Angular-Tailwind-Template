import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWidgetComponent } from './stepper-widget.component';

describe('StepperWidgetComponent', () => {
  let component: StepperWidgetComponent;
  let fixture: ComponentFixture<StepperWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
