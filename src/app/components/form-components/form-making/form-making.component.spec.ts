import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMakingComponent } from './form-making.component';

describe('FormMakingComponent', () => {
  let component: FormMakingComponent;
  let fixture: ComponentFixture<FormMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMakingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
