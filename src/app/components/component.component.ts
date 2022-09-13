import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listJSON } from '@configJson';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  data: any = JSON.parse(JSON.stringify(listJSON as any));
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('listJSON: ', this.data.list_data);
  }

  openComp(item) {
    this.router.navigate([item.componentRoute]);
  }
}
