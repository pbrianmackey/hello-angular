import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'improving-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isButtonDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
