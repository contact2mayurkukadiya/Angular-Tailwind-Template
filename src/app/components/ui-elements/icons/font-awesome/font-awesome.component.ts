import { Component, OnInit } from '@angular/core';
// import { icon } from '@fortawesome/fontawesome-svg-core';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import * as solidIcon from '../../../../../assets/font-awesome-icons/icon-regular.json';

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss'],
})
export class FontAwesomeComponent implements OnInit {
  description: any =
    'Font Awesome now has an official Angular component that’s available for all who want to easily use our icons in projects.';
  shareIcon = faShareSquare;
  api_doc_link: any =
    'https://www.npmjs.com/package/@fortawesome/angular-fontawesome';
  github_projects_link: any =
    'https://github.com/FortAwesome/angular-fontawesome';
  faSolidicons = (solidIcon as any).default;

  constructor() {}

  ngOnInit(): void {
    console.log('faSolidicons: ', this.faSolidicons);
  }
}
