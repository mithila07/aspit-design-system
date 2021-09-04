import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  input = `<div class="as-form-group">
  <input type="text" class="as-form-group__input" placeholder=" " required>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>

/* Always have to be in this order input, labal and span */`;

inputDisabled = `<div class="as-form-group">
  <input type="text" class="as-form-group__input" placeholder=" " required disabled>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputError = `<div class="as-form-group as-form-group--error">
  <input type="text" class="as-form-group__input" placeholder=" " required>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputAlert = `<div class="as-form-group as-form-group--alert">
  <input type="text" class="as-form-group__input" placeholder=" " required>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputTextArea = `<div class="as-form-group">
  <textarea class="as-form-group__textarea" placeholder=" " required></textarea>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__character-counter">102 / 360</span>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputTextAreaDisabled = `<div class="as-form-group disabled">
  <textarea class="as-form-group__textarea" placeholder=" " required disabled></textarea>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__character-counter">102 / 360</span>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputTextAreaFilledDisabled = `<div class="as-form-group disabled">
  <textarea class="as-form-group__textarea" placeholder=" " required disabled>
    I have just typed a quite long description text in here that has over a hundred characters with spaces
  </textarea>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__character-counter">102 / 360</span>
  <span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputTextAreaError = `<div class="as-form-group as-form-group--error-textarea">
  <textarea class="as-form-group__textarea" placeholder=" " required></textarea>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__character-counter">102 / 360</span>
<span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

inputTextAreaAlert = `<div class="as-form-group as-form-group--alert-textarea">
  <textarea class="as-form-group__textarea" placeholder=" " required></textarea>
  <label class="as-form-group__label">Label</label>
  <span class="as-form-group__character-counter">102 / 360</span>
<span class="as-form-group__helper-text">Helper text goes here</span>
</div>`;

searchBar = `<div class="as-search">
  <input class="as-search__input" type="search" placeholder="Search...">
  <i class="as-search__icon icon-search" aria-hidden="true"></i>
</div>`;

searchBarDisabled = `<div class="as-search disabled">
  <input class="as-search__input" type="search" placeholder="Search..." disabled>
  <i class="as-search__icon icon-search" aria-hidden="true"></i>
</div>`;

radioButton = `<label class="as-radio-button">
  <input type="radio" name="radio2" class="as-radio-button__input">
  <span class="as-radio-button__mark"></span>
</label>

//radio button disabled

<label class="as-radio-button disabled">
  <input type="radio" name="radio2" class="as-radio-button__input" disabled>
  <span class="as-radio-button__mark"></span>
</label>

//with label

<label class="as-radio-button">Label
  <input type="radio" name="radio" class="as-radio-button__input">
  <span class="as-radio-button__mark"></span>
</label>

//radio button disabled with label

<label class="as-radio-button disabled">Label
  <input type="radio" name="radio" class="as-radio-button__input" disabled>
  <span class="as-radio-button__mark"></span>
</label>`;

checkBox = `<div class="as-checkbox">
  <input class="as-checkbox__input" id="as-checkbox1" type="checkbox" value="value1">
  <label class="as-checkbox__label" for="as-checkbox1"></label>
</div>

//checkbox disabled

<div class="as-checkbox disabled">
  <input class="as-checkbox__input" id="as-checkbox2" type="checkbox" value="value2" disabled>
  <label class="as-checkbox__label" for="as-checkbox2"></label>
</div>

//with label

<div class="as-checkbox">
  <input class="as-checkbox__input" id="as-checkbox1" type="checkbox" value="value1">
  <label class="as-checkbox__label" for="as-checkbox1">Label</label>
</div>

//checkbox disabled with label

<div class="as-checkbox disabled">
  <input class="as-checkbox__input" id="as-checkbox2" type="checkbox" value="value2" disabled>
  <label class="as-checkbox__label" for="as-checkbox2">Label</label>
</div>`;

checkBoxButton = `<div class="as-checkbox as-checkbox--btn">
  <input class="as-checkbox__input" id="as-checkbox-btn" type="checkbox" value="value-btn">
  <label class="as-checkbox__label" for="as-checkbox-btn">Label</label>
</div>

<!-- Checkbox checked -->

<div class="as-checkbox as-checkbox--btn">
  <input class="as-checkbox__input" id="as-checkbox-btn1" type="checkbox" value="value-btn1" checked>
  <label class="as-checkbox__label" for="as-checkbox-btn1">Label</label>
</div>

<!-- Checkbox disabled -->

<div class="as-checkbox as-checkbox--btn disabled">
  <input class="as-checkbox__input" id="as-checkbox-btn2" type="checkbox" value="value-btn2" disabled>
  <label class="as-checkbox__label" for="as-checkbox-btn2">Label</label>
</div>

<!-- Checkbox disabled checked -->

<div class="as-checkbox as-checkbox--btn disabled">
  <input class="as-checkbox__input" id="as-checkbox-btn3" type="checkbox" value="value-btn3" checked disabled>
  <label class="as-checkbox__label" for="as-checkbox-btn3">Label</label>
</div>`;

toggle = `<div class="as-toggle">
  <label class="as-toggle__switch">
    <input type="checkbox" />
    <span class="slider round"></span>
  </label>
</div>

// toggle disabled

<div class="as-toggle">
  <label class="as-toggle__switch">
    <input type="checkbox" checked />
    <span class="slider round"></span>
  </label>
</div>

// toggle with label on left side

<div class="as-toggle">
  <div class="as-toggle__label mr-16">
      Label
  </div>
  <label class="as-toggle__switch">
      <input type="checkbox" />
      <span class="slider round"></span>
  </label>
</div>

// toggle with label on right side

<div class="as-toggle flex-row-reverse">
  <div class="as-toggle__label ml-16">
      Label
  </div>
  <label class="as-toggle__switch">
      <input type="checkbox" />
      <span class="slider round"></span>
  </label>
</div>`;

  constructor() { }

  ngOnInit() {
  }

}
