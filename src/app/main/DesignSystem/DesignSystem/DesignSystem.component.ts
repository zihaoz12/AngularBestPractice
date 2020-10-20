import { Component, OnInit } from '@angular/core';

export enum MyButtonTypes{
  Primary = 'Primary',
  Secondary = 'Secondary',
  Accent = 'Accent',
  Destructive = 'Destructive'
}


@Component({
  selector: 'app-DesignSystem',
  templateUrl: './DesignSystem.component.html',
  styleUrls: ['./DesignSystem.component.scss']
})
export class DesignSystemComponent implements OnInit {

  MyButtonTypes = MyButtonTypes;

  myid:string = 'BtnSecondary'
  btnName:string = 'BtnPrimary'


  optionsValue = [
    {
      value:'1',
      description:'Apple'
    },
    {
      value:'2',
      description:'Orange'
    },
    {
      value:'3',
      description:'Pear'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    console.log('click')
  }

}
