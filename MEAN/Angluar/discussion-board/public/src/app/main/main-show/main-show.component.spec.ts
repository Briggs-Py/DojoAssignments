import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShowComponent } from './main-show.component';

describe('MainShowComponent', () => {
  let component: MainShowComponent;
  let fixture: ComponentFixture<MainShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
