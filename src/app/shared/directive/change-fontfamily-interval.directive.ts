import { Directive, Input, ElementRef,OnInit, OnDestroy } from '@angular/core';


@Directive({
  selector: '[appChangeFontfamilyInterval]'
})
export class ChangeFontfamilyIntervalDirective implements OnInit,OnDestroy{

  @Input() intervaltime = 1

  timeAction;

  currentIndex = 0;

  fontFamilyArray= ['monospace','times','fantasy']

  constructor( private elementRef: ElementRef) {
  }

  ngOnInit(){
    console.log('change font');
    this.timeAction = setInterval(()=>{
      this.currentIndex++;
      if(this.currentIndex > this.fontFamilyArray.length-1){
        this.currentIndex = 0;
      }
      this.elementRef.nativeElement.style.fontFamily = this.fontFamilyArray[this.currentIndex]
    },this.intervaltime * 1000)
  }

  ngOnDestroy(){
    this.timeAction
  }



}
