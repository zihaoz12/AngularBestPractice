import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(
    private modalService: ModalService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {}
  hideModal(e) {
    if (e.target.className === 'backdrop') {
      this.elementRef.nativeElement.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }
}
