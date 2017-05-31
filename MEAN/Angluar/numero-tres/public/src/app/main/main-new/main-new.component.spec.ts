import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewComponent } from './main-new.component';

describe('MainNewComponent', () => {
  let component: MainNewComponent;
  let fixture: ComponentFixture<MainNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
