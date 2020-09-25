import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  likes = {
    value:10,
    isClicked:false
  };
  dislikes = {
    value:10,
    isClicked:false
  };

  ngOnInit() {}
  showModal() {
    console.log('click');
    this.modalService.showModal('hello-modal');
  }

  incrementLikes(){
    this.likes.value+=1;
    this.likes.isClicked = true;


  }

  incrementDisLikes(){
    this.dislikes.value++;
    this.likes.value--;
    this.dislikes.isClicked = true;

  }

}
