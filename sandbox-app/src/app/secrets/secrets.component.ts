import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secrets',
  templateUrl: './secrets.component.html',
  styles: [` .fifth{
    color: white;
}`]
})
export class SecretsComponent implements OnInit {



  showSecret = false;
  clicks = [];
  count = 1;
  constructor() { }

  ngOnInit() {
  }

  setRevealStatus(){
    this.showSecret = ! this.showSecret;
    // this.clicks.push(this.count);
    // this.count++;
    this.clicks.push(new Date());
  }

  

}
