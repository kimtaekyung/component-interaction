import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  isShow: boolean = true;
  contentText: string = 'content';
  constructor() { }

  ngOnInit() {
  }
  
  

  changeText(text: string) {
    this.contentText = text;
  }
}
