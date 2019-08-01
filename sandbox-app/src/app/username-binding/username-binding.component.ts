import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-binding',
  templateUrl: './username-binding.component.html',
  styleUrls: ['./username-binding.component.css']
})
export class UsernameBindingComponent implements OnInit {
  username:string = '';
  isClickable = false;
  constructor() { }

  ngOnInit() {
  }

  getClickable(){
    return this.username === '';
  }

  resetClicked(){
    this.username = '';
  }

}
