import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  codeH1 = `<h1>The quick brown fox</h1>
<div class="h1">jumps over the lazy dog.</div>`;

  codeH2 = `<h2>The quick brown fox</h2>
<div class="h2">jumps over the lazy dog.</div>`;

  codeH3 = `<h3>The quick brown fox</h3>
<div class="h3">jumps over the lazy dog.</div>`;

  codeH4 = `<h4>The quick brown fox</h4>
<div class="h4">jumps over the lazy dog.</div>`;

  codeH5 = `<h5>The quick brown fox</h5>
<div class="h5">jumps over the lazy dog.</div>`;

  codeH6 = `<h6>The quick brown fox</h6>
<div class="h6">jumps over the lazy dog.</div>`;

  codeP = `<p>The quick brown fox</p>
<div class="p">jumps over the lazy dog.</div>`;

  constructor() { }

  ngOnInit() {
  }

}
