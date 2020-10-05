import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-MyButton',
  templateUrl: './MyButton.component.html',
  styleUrls: ['./MyButton.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Output() click  = new  EventEmitter();

  btn = 'my-btn'
  constructor() { }

  ngOnInit() {
  }

}
