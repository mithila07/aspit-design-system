import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-design-system',
  template: `
    <p>
      design-system works!
    </p>
    <span class="message">Msg</span>
  `,
  styleUrls: [ './aspit-new.scss']
})
export class AspitCssLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
