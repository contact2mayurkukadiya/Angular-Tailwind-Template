import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { buttonJSON } from '@configJson';
import { faCartArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HighlightAutoResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  cartArrow = faCartArrowDown;
  arrowRightIcon = faArrowRight;
  buttonData: any = {
    buttonData: [
      {
        id: 'btnSimple',
        btn_title: 'Simple',
        use_css: false,
        tailwind_class:
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        external_class: 'btn btn-blue',
      },
      {
        id: 'btnPill',
        btn_title: 'Pill',
        useCSS: false,
        tailwind_class:
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
      },
      {
        id: 'btnOutline',
        btn_title: 'Outline',
        useCSS: false,
        tailwind_class:
          'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded',
      },
      {
        id: 'btnBordered',
        btn_title: 'Bordered',
        useCSS: false,
        tailwind_class:
          'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded',
      },
      {
        id: 'btnDisabled',
        btn_title: 'Disabled',
        useCSS: false,
        tailwind_class:
          'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed',
      },
      {
        id: 'btn3D',
        btn_title: '3D',
        useCSS: false,
        tailwind_class:
          'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded',
      },
      {
        id: 'btnElevated',
        btn_title: 'Elevated',
        useCSS: false,
        tailwind_class:
          'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow',
      },

      {
        id: 'btnGrouped',
        btn_title: 'Grouped',
        useCSS: false,
        tailwind_class:
          'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4',
      },
      {
        id: 'btnIcons',
        btn_title: 'Download',
        useCSS: false,
        tailwind_class:
          'bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center',
        icon: true,
      },
    ],
  };
  code = ``;
  response: HighlightAutoResult;
  data: any;
  description: string = `I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers. I understand culture. I am the
          nucleus. I think that’s a responsibility that I have, to push
          possibilities, to show people, this is the level that things could be
          at.`;
  constructor() {
    this.data = this.buttonData.buttonData;
  }

  ngOnInit(): void {}

  onHighlight(e: HighlightAutoResult) {
    this.response = {
      language: e.language,
      relevance: e.relevance,
      secondBest: '{...}',
      value: '{...}',
    };
  }
}
