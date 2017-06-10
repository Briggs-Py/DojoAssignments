import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodTimeComponent } from './good-time.component';

describe('GoodTimeComponent', () => {
  let component: GoodTimeComponent;
  let fixture: ComponentFixture<GoodTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
