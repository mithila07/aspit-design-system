import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  segmentedControls = `<div class="as-tabs as-tabs--small">
    <div class="as-tabs__item as-tabs__item--active">Selected</div>
    <div class="as-tabs__item">Option</div>
    <div class="as-tabs__item">Option</div>
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
