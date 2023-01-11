import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
})
export class AnimationsComponent implements OnInit {
  description = 'Utilities for animating elements with CSS animations.';

  constructor() {}

  ngOnInit(): void {}
}
