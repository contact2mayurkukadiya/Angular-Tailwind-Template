import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReadyToUseComponent } from './form-ready-to-use.component';

describe('FormReadyToUseComponent', () => {
  let component: FormReadyToUseComponent;
  let fixture: ComponentFixture<FormReadyToUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReadyToUseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReadyToUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
