import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationWidgetComponent } from './animation-widget.component';

describe('AnimationWidgetComponent', () => {
  let component: AnimationWidgetComponent;
  let fixture: ComponentFixture<AnimationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
