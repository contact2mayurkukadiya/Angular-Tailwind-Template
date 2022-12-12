import { Component, OnInit } from '@angular/core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ScriptInjectorService } from 'src/app/core/services/script-injector.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

  angleRight = faAngleRight;
  angleLeft = faAngleLeft;

  constructor(private scriptInjector: ScriptInjectorService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scriptInjector.load(
      'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js'
    );
  }
}
