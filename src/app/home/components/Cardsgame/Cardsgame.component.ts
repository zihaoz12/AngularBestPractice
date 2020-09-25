import { Component, OnInit } from '@angular/core';



export interface Card{
  id:number,
  value:string,
  isFliped:boolean
}

@Component({
  selector: 'app-Cardsgame',
  templateUrl: './Cardsgame.component.html',
  styleUrls: ['./Cardsgame.component.scss']
})
export class CardsgameComponent implements OnInit {

  cards:Card[]=[
    {
      id:0,
      value:'1',
      isFliped:false
    },
    {
      id:1,
      value:'2',
      isFliped:false
    },
    {
      id:2,
      value:'2',
      isFliped:false
    },
    {
      id:3,
      value:'1',
      isFliped:false
    },
    {
      id:4,
      value:'3',
      isFliped:false
    },
    {
      id:5,
      value:'3',
      isFliped:false
    },
    {
      id:6,
      value:'4',
      isFliped:false
    },
    {
      id:7,
      value:'4',
      isFliped:false
    }
  ]
  newcards: Card[] = [];

  cardsInPlay=[];
  cardsInPlayId=[]

  constructor() { }

  ngOnInit() {
    this.getRandomCards();
  }


  getRandomCards(){
    while (this.cards.length) {
      const index = Math.floor(Math.random() * this.cards.length);
      this.newcards.push(this.cards[index]);
      this.cards.splice(index, 1);
    }

    this.cards = [...this.newcards];
  }

  flipCard(card){
    card.isFliped = !card.isFliped;
    console.log("isFliped")
    if(card.isFliped == true){
      this.checkCard(card)
    }

  }
  checkCard(card){

    if(this.cardsInPlay.length == 0){
      this.cardsInPlay.push(card.value);
      this.cardsInPlayId.push(card.id);
    }else if(this.cardsInPlay.length == 1 && this.cardsInPlayId[1] != card.id){
      this.cardsInPlay.push(card.value);
      this.cardsInPlayId.push(card.id);
      console.log(this.cardsInPlay, this.cardsInPlayId)
      if(this.cardsInPlayId[0] != this.cardsInPlayId[1]){
        if(this.cardsInPlay[0] == this.cardsInPlay[1]){
          this.cardsInPlay = [];
          this.cardsInPlayId = [];
          console.log(this.cardsInPlay)
          setTimeout(()=>{
          alert("Found it!!!")
          },100)

        }else{
          console.log("Not Match");
          this.reset();
        }
      }

    }
  }

  reset(){
    this.cardsInPlay = [];
    this.cardsInPlayId= [];
    setTimeout(()=>{
      for(let i = 0; i < this.cards.length;i++){
        this.cards[i].isFliped = false;
      }
    },400)

    console.log("Reset");

  }



}
