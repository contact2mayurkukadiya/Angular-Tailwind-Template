import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWidgetComponent } from './dropdown-widget.component';

describe('DropdownWidgetComponent', () => {
  let component: DropdownWidgetComponent;
  let fixture: ComponentFixture<DropdownWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
