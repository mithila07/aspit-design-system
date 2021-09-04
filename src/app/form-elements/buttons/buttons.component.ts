import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  button56Primary = `<button class="as-btn as-btn--56 as-btn--primary d-flex align-items-center">
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>

<!-- If the button is disabled -->

<button class="as-btn as-btn--56 as-btn--primary d-flex align-items-center" disabled>
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>`;

button56SuccessDanger = `<button class="as-btn as-btn--56 as-btn--success d-flex align-items-center">
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>

<button class="as-btn as-btn--56 as-btn--danger d-flex align-items-center" disabled>
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>`;

secondary56 = `<button class="as-btn as-btn--56 as-btn--secondary d-flex align-items-center">
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="as-btn__icon-arrow icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>

<button class="as-btn as-btn--56 as-btn--secondary d-flex align-items-center" disabled>
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="as-btn__icon-arrow icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>

<button class="as-btn as-btn--56 as-btn--secondary d-flex align-items-center as-btn--selected">
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="as-btn__icon-arrow icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>`;

secondary56Danger = `<button class="as-btn as-btn--56 as-btn--secondary--danger d-flex align-items-center">
  <i class="icon-button icon-24" aria-hidden="true"></i>
  <span class="d-flex flex-grow-1 pl-16">Button</span>
  <i class="as-btn__icon-arrow icon-right-open-mini icon-18 d-flex" aria-hidden="true"></i>
</button>`;

primary56 = `<button class="as-btn as-btn--56 as-btn--primary">Button</button>

<button class="as-btn as-btn--56 as-btn--primary" disabled >Button</button>`;

primary56SuccessDanger = `<button class="as-btn as-btn--56 as-btn--success">Button</button>

<button class="as-btn as-btn--56 as-btn--danger">Button</button>`;

secondary56WithoutIcon = `<button class="as-btn as-btn--56 as-btn--secondary">Button</button>

<button class="as-btn as-btn--56 as-btn--secondary" disabled>Button</button>

<button class="as-btn as-btn--56 as-btn--secondary--danger">Button</button>`;

btn40 = `<button class="as-btn as-btn--40 as-btn--primary">Button</button>

<button class="as-btn as-btn--40 as-btn--primary" disabled>Button</button>

<button class="as-btn as-btn--40 as-btn--secondary">Button</button>

<button class="as-btn as-btn--40 as-btn--secondary" disabled>Button</button>

<button class="as-btn as-btn--40 as-btn--secondary as-btn--selected">Button</button>`;

icon40 = `<button class="as-btn as-btn--icon as-btn--primary">
  <i class="icon-right-dir d-flex"></i>
</button>

<button class="as-btn as-btn--icon as-btn--primary" disabled>
  <i class="icon-right-dir d-flex"></i>
</button>

<button class="as-btn as-btn--icon as-btn--secondary">
  <i class="icon-right-dir d-flex"></i>
</button>

<button class="as-btn as-btn--icon as-btn--secondary" disabled>
  <i class="icon-right-dir d-flex"></i>
</button>`;

  constructor() { }

  ngOnInit() {
  }

}
