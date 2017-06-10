import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadTimeComponent } from './bad-time.component';

describe('BadTimeComponent', () => {
  let component: BadTimeComponent;
  let fixture: ComponentFixture<BadTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
