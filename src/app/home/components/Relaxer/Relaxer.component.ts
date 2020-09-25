import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Relaxer',
  templateUrl: './Relaxer.component.html',
  styleUrls: ['./Relaxer.component.scss']
})
export class RelaxerComponent implements OnInit {

  totalTime:number = 7500;
  breathTime:number = (this.totalTime/5) *2;
  holdTime:any = this.totalTime / 5;




  constructor() { }

  ngOnInit() {
  }

  breathAnimation(){

  }

}
