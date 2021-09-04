import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  appcards = ` <div class="cards d-flex flex-row align-items-center">
  <div class="cards-col px-24 border-right h-100 d-flex align-items-center text-primary">
      <i class="icon-appointment icon-24"></i>
  </div>
  <div class="cards-col cards-col--160 cards-col--mw-0 px-24">
      <p class="mb-0 font-weight-600 text-ellipsis" title="09:00 - 09:30">09:00 - 09:30 <span><i class="icon-alert-triangle icon-14 text-disabled"></i></span></p>
      <p class="text-ellipsis" title="30 minutes"><small>30 minutes</small></p>
  </div>
  <div class="cards-col cards-col--mw-0 flex-grow-1">
      <p class="font-weight-600 text-ellipsis" title="Melinda Melhu">Melinda Melhus</p>
      <p class="text-ellipsis" title="Knee problems"><small>Knee problems</small></p>
  </div>
  <div class="cards-col px-24">
      <span class="as-chip">CON</span>
  </div>
</div>`;

  freeslot = `<div class="cards cards--40 cards--success d-flex flex-row align-items-center">
  <div class="cards-col px-24 border-right h-100 d-flex align-items-center text-success">
      <i class="icon-plus icon-24"></i>
  </div>
  <div class="cards-col cards-col--160 cards-col--mw-0 px-24">
      <p class="mb-0 font-weight-600 text-ellipsis" title="09:00 - 09:30">09:00 - 09:30</p>
  </div>
  <div class="cards-col cards-col--mw-0 flex-grow-1">
      <p class="font-weight-600 text-ellipsis" title="30 minutes">30 minutes</p>
  </div>
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
