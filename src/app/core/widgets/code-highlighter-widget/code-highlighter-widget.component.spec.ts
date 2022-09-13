import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeHighlighterWidgetComponent } from './code-highlighter-widget.component';

describe('CodeHighlighterWidgetComponent', () => {
  let component: CodeHighlighterWidgetComponent;
  let fixture: ComponentFixture<CodeHighlighterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeHighlighterWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeHighlighterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
