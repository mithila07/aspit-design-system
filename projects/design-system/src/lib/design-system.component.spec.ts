import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspitCssLibComponent } from './design-system.component';

describe('AspitCssLibComponent', () => {
  let component: AspitCssLibComponent;
  let fixture: ComponentFixture<AspitCssLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspitCssLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspitCssLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
