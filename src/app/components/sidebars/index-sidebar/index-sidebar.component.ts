import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html',
  styleUrls: ['./index-sidebar.component.scss']
})
export class IndexSidebarComponent implements OnInit {
  home = faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
