import { Component, OnInit,ViewChild, ElementRef, NgZone } from '@angular/core';
import {Square } from './square';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})


export class CanvasComponent implements OnInit {
  @ViewChild('canvas',{static:true})
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  squares:Square[] = [];
  width;
  height;

  constructor(
    private ngZone:NgZone
  ) { }

  ngOnInit() {
   this.ctx = this.canvas.nativeElement.getContext('2d');
   this.ctx.fillStyle = 'red';
   this.ngZone.runOutsideAngular(()=>{
     this.tick()
   })
   setInterval(() => {
    this.tick()
    }, 200);
  }


  tick(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squares.forEach((square: Square) => {
      square.move();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }
  animate(){
    console.log("Start");

    const square = new Square(this.ctx);
    this.squares = this.squares.concat(square);

  }


  ngOnDestroy(){
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId)
  }
}
