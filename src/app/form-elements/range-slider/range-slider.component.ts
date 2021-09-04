import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200,
    showSelectionBar: true
  };

  rangeslider = `<div class="aurora-range-slider d-flex flex-row align-items-center">
  <button type="button" class="btn" (click)="valueDown()">-</button>
  <ng5-slider [(value)]="value" [options]="options"></ng5-slider>
  <button type="button" class="btn" (click)="valueUp()">+</button>
</div>`;

  constructor() { }

  ngOnInit() {
    
  }
  valueDown(){
    this.value = this.value - 10;
  }
  valueUp(){
    this.value = this.value + 10;
  }
}
