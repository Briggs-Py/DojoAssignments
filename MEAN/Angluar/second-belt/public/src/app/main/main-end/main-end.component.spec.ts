import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEndComponent } from './main-end.component';

describe('MainEndComponent', () => {
  let component: MainEndComponent;
  let fixture: ComponentFixture<MainEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
