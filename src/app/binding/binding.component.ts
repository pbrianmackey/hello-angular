import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'improving-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  loggedInUserName: string = 'Brian Mackey';
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    alert('Button was clicked!');
  }
}
