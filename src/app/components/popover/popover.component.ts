import { Component, OnInit } from '@angular/core';
import { ScriptInjectorService } from 'src/app/core/services/script-injector.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  constructor(private scriptInjector: ScriptInjectorService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scriptInjector.load(
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    );
  }
}
