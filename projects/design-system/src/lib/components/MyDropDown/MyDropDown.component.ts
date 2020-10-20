import { Component, OnInit, Input } from '@angular/core';


export interface DropDownProps{

}
@Component({
  selector: 'app-MyDropDown',
  templateUrl: './MyDropDown.component.html',
  styleUrls: ['./_MyDropDown.component.scss']
})
export class MyDropDownComponent implements OnInit {

  @Input()
  options:any[]=[];
  @Input()
  idName:string = 'value'
  @Input()
  descriptionName:string = 'description'

  constructor() { }

  ngOnInit() {
  }

}
