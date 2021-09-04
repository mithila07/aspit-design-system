import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {

  modalSm = `<div class="modal-header">
  <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()">
      <i class="icon-close-box icon-lg" aria-hidden="true"></i>
  </button>
</div>
<div class="modal-body">
  <div class="content-body">
      <i class="icon-erase content-body__icon as-text-primary" aria-hidden="true"></i>
      <h1 class="content-body__title mb-24">Header</h1>
      <p class="content-body__label mb-24">Body text</p>
  </div>
</div>
<div class="modal-footer">
  <div class="content-footer">
      <button class="as-btn as-btn--56 as-btn--primary">Action 01</button>
      <button class="as-btn as-btn--56 as-btn--secondary">Action 02</button>
  </div>
</div>`;

modalSmA = `<div class="modal-header">
  <h3 class="modal-title flex-grow-1 text-center">Action</h3>
  <button type="button" class="close" aria-label="Close" (click)="modalRef.hide()">
      <i class="icon-close-box icon-lg" aria-hidden="true"></i>
  </button>
</div>
<div class="modal-body">
  <div class="content-body">
     Content goes here
  </div>
</div>
<div class="modal-footer">
  <div class="content-footer">
      <button class="as-btn as-btn--56 as-btn--primary">Action 01</button>
      <button class="as-btn as-btn--56 as-btn--secondary">Action 02</button>
  </div>
</div>`;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModalWithClass(template: TemplateRef<any>, className: string) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: `as-modal modal-dialog-centered ${className}` })
    );
  }
}
