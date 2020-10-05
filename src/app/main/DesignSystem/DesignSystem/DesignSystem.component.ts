import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-DesignSystem',
  templateUrl: './DesignSystem.component.html',
  styleUrls: ['./DesignSystem.component.scss']
})
export class DesignSystemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    console.log('click')
  }

}
