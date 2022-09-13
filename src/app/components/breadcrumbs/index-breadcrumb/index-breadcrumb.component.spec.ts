import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBreadcrumbComponent } from './index-breadcrumb.component';

describe('IndexBreadcrumbComponent', () => {
  let component: IndexBreadcrumbComponent;
  let fixture: ComponentFixture<IndexBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
