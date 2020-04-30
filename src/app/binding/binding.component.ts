import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mackey-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  loggedInUserName: string = 'Brian Mackey';
  isButtonDisabled: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    alert('Button was clicked!');
  }
}
