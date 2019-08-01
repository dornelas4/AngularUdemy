import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, AfterViewInit , AfterContentInit{

  @Input('srvElement') element : {type:string, name:string, content:string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph : ElementRef;
  constructor() { 
    console.log("constructor called");
  }


  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }
  ngOnInit() {
    console.log("ngOnInit called")
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(){
    console.log(this.paragraph.nativeElement.textContent);
  }
}
