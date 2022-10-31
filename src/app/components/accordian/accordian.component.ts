import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  open: any = false;
  show: boolean = false;
  accordionData: any = [
    {
      id: 'acc1',
      h2ID: 'h12',
      divID: 'acc1div',
      buttonTitle: 'Accordion Item #1',
      normalText:
        ' It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing andchiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within hough the transition does limit overflow.',
      buttonClass:
        ' accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none card-title-text',
      strongText: `This is the first item's accordion body.`,
      codeText: `.accordion-body.`,
      childClass: '',
    },
    {
      id: 'acc2',
      h2ID: 'h22',
      divID: 'acc2div',
      buttonTitle: 'Accordion Item #2',
      normalText:
        ' It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing andchiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It is also worth noting that just about any HTML can go within hough the transition does limit overflow.',
      buttonClass:
        ' accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none card-title-text',
      strongText: `This is the first item's accordion body.`,
      codeText: `.accordion-body.`,
      childClass: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
  }
}
