import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  dropdown = `<div class="as-dropdown">
  <ng-select [items]="cities" bindLabel="name" [(ngModel)]="selectedCity"
      class="as-dropdown__input" [clearable]="false">
  </ng-select>
  <label class="as-dropdown__label">Label</label>
  <span class="as-dropdown__helper-text">Helper text goes here</span>
</div>`;

dropdownDisabled = `<div class="as-dropdown disabled">
  <ng-select [items]="cities" bindLabel="name" [(ngModel)]="selectedCity"
      class="as-dropdown__input" [clearable]="false" [readonly]="true" >
  </ng-select>
  <label class="as-dropdown__label">Label</label>
  <span class="as-dropdown__helper-text">Helper text goes here</span>
</div>

<!-- Need to include [readonly] = "true" input -->
<!-- If there is a default value add '.has-value' class to <ng-select> -->`;

dropdownError = `<div class="as-dropdown as-dropdown-error">
  <ng-select [items]="cities" bindLabel="name" [(ngModel)]="selectedCity"
      class="as-dropdown__input has-error" [clearable]="false">
  </ng-select>
  <label class="as-dropdown__label">Label</label>
  <span class="as-dropdown__helper-text">Helper text goes here</span>
</div>`;

dropdownAlert = `<div class="as-dropdown as-dropdown-alert">
  <ng-select [items]="cities" bindLabel="name" [(ngModel)]="selectedCity"
      class="as-dropdown__input has-alert" [clearable]="false">
  </ng-select>
  <label class="as-dropdown__label">Label</label>
  <span class="as-dropdown__helper-text">Helper text goes here</span>
</div>`;

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
  ];

  items = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'}
  ];

  items1 = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'}
  ];

  errItems = [
    {id: 1, name: 'Option1'},
    {id: 2, name: 'Option2'},
    {id: 3, name: 'Option3'}
  ];

  aleItems = [
    {id: 1, name: 'Option1'},
    {id: 2, name: 'Option2'},
    {id: 3, name: 'Option3'}
  ];

  selectedCity = null;
  selectedItem = null;
  selectedItem1 = null;
  selectedErrItem = null;
  selectedAleItem = null;

  constructor() { }

  ngOnInit() {
    this.selectedItem = this.items[1];
  }
  public clearSelection() {
    this.selectedCity = null;
  }
}
