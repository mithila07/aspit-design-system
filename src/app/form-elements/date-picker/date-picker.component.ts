import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  calendar = `<bs-datepicker-inline [bsValue]="bsInlineValue"
  [bsConfig]="{containerClass: 'as-datepicker as-datepicker--full-date as-datepicker--on-popover', monthLabel: 'MMM' }">
</bs-datepicker-inline>`;

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   }

  ngOnInit() {
  }

}
