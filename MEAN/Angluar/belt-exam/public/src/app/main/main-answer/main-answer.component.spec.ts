import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnswerComponent } from './main-answer.component';

describe('MainAnswerComponent', () => {
  let component: MainAnswerComponent;
  let fixture: ComponentFixture<MainAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
