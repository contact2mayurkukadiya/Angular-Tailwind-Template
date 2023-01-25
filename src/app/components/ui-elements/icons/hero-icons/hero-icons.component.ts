import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-icons',
  templateUrl: './hero-icons.component.html',
  styleUrls: ['./hero-icons.component.scss'],
})
export class HeroIconsComponent implements OnInit {
  description: any = 'Use this set of SVG powered icons for Tailwind CSS and FlowBite';
  constructor() {}

  ngOnInit(): void {}
}
