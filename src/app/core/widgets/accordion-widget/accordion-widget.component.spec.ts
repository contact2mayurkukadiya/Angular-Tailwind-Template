import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionWidgetComponent } from './accordion-widget.component';

describe('AccordionWidgetComponent', () => {
  let component: AccordionWidgetComponent;
  let fixture: ComponentFixture<AccordionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
