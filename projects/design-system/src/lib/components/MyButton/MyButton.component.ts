import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';


export enum MyButtonTypes{
  Primary = 'Primary',
  Secondary = 'Secondary',
  Destructive = 'Destructive',
  Accent = 'Accent'
}
@Component({
  selector: 'app-MyButton',
  templateUrl: './MyButton.component.html',
  styleUrls: ['./MyButton.component.scss']
})
export class MyButtonComponent implements OnInit {

  @Output()
  click:EventEmitter<any> = new EventEmitter();

  @Input()
  type:string = 'button';

  @Input()
  myType:MyButtonTypes = MyButtonTypes.Primary;

  @Input()
  id: string = 'myButtonId';

  @Input()
  name:string = 'myButtonName';

  @Input()
  disabled: boolean = false;

  public MyButtonTypes = MyButtonTypes

  btn = 'my-btn'
  constructor() { }

  public onClick():void{
    if(this.click.observers.length > 0){
      console.log('MyButton Emit:', this.click.observers)
      this.click.emit()
    }
  }
  ngOnInit() {
  }

  public typeEqualTo(checkType:MyButtonTypes):boolean{
    return this.myType === checkType
  }

}
