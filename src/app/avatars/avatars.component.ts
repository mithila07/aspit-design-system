import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  avatarText = `<div class="avatar avatar--64 avatar--primary d-flex align-items-center justify-content-center">
  <span class="avatar__text">MM</span>
</div>
<div class="avatar avatar--32 avatar--primary d-flex align-items-center justify-content-center">
  <span class="avatar__text">MM</span>
</div>`;

  avatarImg = `<div class="avatar avatar--64 avatar--primary d-flex align-items-center justify-content-center">
  <img class="rounded-circle" src="https://i.pravatar.cc/64" width="64" height="64" />
</div>
<div class="avatar avatar--32 avatar--primary d-flex align-items-center justify-content-center">
  <img class="rounded-circle" src="https://i.pravatar.cc/32" width="32" height="32" />
</div>`

  constructor() { }

  ngOnInit() {
  }

}
