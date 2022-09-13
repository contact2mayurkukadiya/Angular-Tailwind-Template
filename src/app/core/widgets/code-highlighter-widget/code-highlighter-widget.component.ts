import { Component, Input, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-code-highlighter-widget',
  templateUrl: './code-highlighter-widget.component.html',
  styleUrls: ['./code-highlighter-widget.component.scss'],
})
export class CodeHighlighterWidgetComponent implements OnInit {
  @Input() code: any;
  constructor(private clipboardApi: ClipboardService) {}

  ngOnInit(): void {
    console.log('code: ', this.code);
  }

  onHighlight(event) {
    //
  }

  copyText() {
    console.log('COPIES');
    this.clipboardApi.copyFromContent(this.code);
  }
}
