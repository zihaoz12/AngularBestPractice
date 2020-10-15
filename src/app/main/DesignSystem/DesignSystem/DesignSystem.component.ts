import { Component, OnInit } from '@angular/core';

export enum MyButtonTypes{
  Primary = 'Primary',
  Secondary = 'Secondary'
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

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    console.log('click')
  }

}
