import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigations',
    templateUrl: './navigations.component.html',
    styleUrls: ['./navigations.component.css']
})
export class NavigationsComponent implements OnInit {

    mainNav = `<nav class="as-main-nav navbar navbar-expand bg-blue-600 h-56 pl-24 pr-0">
  <h6 class="navbar-brand as-text-white h6">Head Title</h6>

  <div class="as-main-nav__rhs-items pr-8">
      <ng-select class="as-main-nav__dropdown" [clearable]="false" [items]="cities" [(ngModel)]="selectedCity"
          bindLabel="name" [searchable]="false">
          <ng-template ng-label-tmp let-item="item">
              <i [ngClass]="item.icon"></i>
          </ng-template>
      </ng-select>

      <form class="form-inline">
          <div class="as-search as-search--h-40">
              <input class="as-search__input" type="search" placeholder="Search...">
              <i class="as-search__icon icon-search" aria-hidden="true"></i>
          </div>
      </form>
      <div class="icon-item"><i class="icon-army-knife" aria-hidden="true"></i></div>
      <div class="icon-item">
          <i class="icon-comment-alert" aria-hidden="true"></i>
          <span class="as-num-chip">2</span>
      </div>
      <div class="icon-item"><i class="icon-open-pane" aria-hidden="true"></i></div>
  </div>
</nav>`;

    secondaryNav = `<ul class="as-secondary-nav nav nav-pills">
  <li class="nav-item">
      <a class="nav-link" href="#">One</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">Second</a>
  </li>
  <li class="nav-item">
      <a class="nav-link active" href="#">Third</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">Forth</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">Fifth</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">Sixth</a>
  </li>
</ul>`;

    cities = [
        {
            id: 1,
            name: 'Accounting',
            icon: 'icon-graph-square'
        },
        {
            id: 2,
            name: 'Messages',
            icon: 'icon-comment-new'
        },
        {
            id: 3,
            name: 'Tasks',
            icon: 'icon-tasks'
        },
        {
            id: 4,
            name: 'Planner',
            icon: 'icon-planner'
        },
    ];

    selectedCity = this.cities[0].name;

    constructor() { }

    ngOnInit() {
    }

}
