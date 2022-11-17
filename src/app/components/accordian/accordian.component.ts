import { Component, OnInit } from '@angular/core';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent implements OnInit {
  accordion1Data: any = [
    {
      id: 'accordion-collapse',
      buttonTitle: 'This is default Accordion',
      header_id: 'accordion-collapse-heading-1',
      body_id: 'accordion-collapse-body-1',
      displayArrow: true,
    },
    {
      id: 'accordion-collapse',
      buttonTitle: 'How about this one?',
      header_id: 'accordion-collapse-heading-2',
      body_id: 'accordion-collapse-body-2',
      displayArrow: true,
    },
    {
      id: 'accordion-collapse',
      buttonTitle: 'Try me..?',
      header_id: 'accordion-collapse-heading-3',
      body_id: 'accordion-collapse-body-3',
      displayArrow: true,
    },
  ];

  accordion2Data: any = [
    {
      id: 'accordion-open',
      buttonTitle: 'This is default Accordion',
      header_id: 'accordion-open-heading-1',
      body_id: 'accordion-open-body-1',
      icon: faCircleQuestion,
      displayArrow: true,
    },
    {
      id: 'accordion-open',
      buttonTitle: 'How about this one?',
      header_id: 'accordion-open-heading-2',
      body_id: 'accordion-open-body-2',
      icon: faCircleQuestion,
      displayArrow: true,
    },
    {
      id: 'accordion-open',
      buttonTitle: 'Try me..?',
      header_id: 'accordion-open-heading-3',
      body_id: 'accordion-open-body-3',
      icon: faCircleQuestion,
      displayArrow: true,
    },
  ];

  accordion3Data: any = [
    {
      id: 'accordion-color',
      buttonTitle: 'This is default Accordion',
      header_id: 'accordion-color-heading-1',
      body_id: 'accordion-color-body-1',
      displayArrow: true,
    },
    {
      id: 'accordion-color',
      buttonTitle: 'How about this one?',
      header_id: 'accordion-color-heading-2',
      body_id: 'accordion-color-body-2',
      displayArrow: true,
    },
    {
      id: 'accordion-color',
      buttonTitle: 'Try me..?',
      header_id: 'accordion-color-heading-3',
      body_id: 'accordion-color-body-3',
      displayArrow: true,
    },
  ];

  accordion4Data: any = [
    {
      id: 'accordion-flush',
      buttonTitle: 'This is default Accordion',
      header_id: 'accordion-flush-heading-1',
      body_id: 'accordion-flush-body-1',
      btnClass:
        'flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400',
      displayArrow: true,
    },
    {
      id: 'accordion-flush',
      buttonTitle: 'How about this one?',
      header_id: 'accordion-flush-heading-2',
      body_id: 'accordion-flush-body-2',
      btnClass:
        'flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400',
      displayArrow: true,
    },
    {
      id: 'accordion-flush',
      buttonTitle: 'Try me..?',
      header_id: 'accordion-flush-heading-3',
      body_id: 'accordion-flush-body-3',
      btnClass:
        'flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400',
      displayArrow: true,
    },
  ];

  accordion5Data: any = [
    {
      id: 'accordion-arrow-icon',
      buttonTitle: 'This is default Accordion',
      header_id: 'accordion-arrow-icon-heading-1',
      body_id: 'accordion-arrow-icon-body-1',
      displayArrow: false,
    },
    {
      id: 'accordion-arrow-icon',
      buttonTitle: 'How about this one?',
      header_id: 'accordion-arrow-icon-heading-2',
      body_id: 'accordion-arrow-icon-body-2',
      sameArrow: true,
    },
    {
      id: 'accordion-arrow-icon',
      buttonTitle: 'Try me..?',
      header_id: 'accordion-arrow-icon-heading-3',
      body_id: 'accordion-arrow-icon-body-3',
      circleArrow: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
