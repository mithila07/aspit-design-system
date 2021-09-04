import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {

  tooltip = `<button type="button" tooltip="Vivamus sagittis lacus" placement="top" containerClass="as-tooltip" >
  Tooltip on top
</button>

<button type="button" tooltip="Vivamus sagittis lacus" placement="right" containerClass="as-tooltip">
  Tooltip on right
</button>

<button type="button" tooltip="Vivamus sagittis lacus" placement="left" containerClass="as-tooltip">
  Tooltip on left
</button>

<button type="button" tooltip="Vivamus sagittis lacus" placement="bottom" containerClass="as-tooltip">
  Tooltip on bottom
</button>

<!-- Use placement input to determine tooltip's placement -->
<!-- It is required to add containerClass="as-tooltip" when adding tooltips -->`;

  constructor() { }

  ngOnInit() {
  }

}
