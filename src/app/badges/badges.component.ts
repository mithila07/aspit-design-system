import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  chips = `<span class="as-chip">Label</span>
<span class="as-chip">Second Label</span>
<span class="as-chip">Third Label</span>
<span class="as-chip">Fourth Label</span>
<span class="as-chip">Fifth Label</span>
<span class="as-chip">Sixth Label</span>`;

  numberChips = `<span class="as-num-chip">2</span>
<span class="as-num-chip">20</span>
<span class="as-num-chip">200</span>
<span class="as-num-chip">2000</span>`;

  constructor() { }

  ngOnInit() {
  }

}
