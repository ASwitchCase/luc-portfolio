import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work4Component } from './work4.component';

describe('Work4Component', () => {
  let component: Work4Component;
  let fixture: ComponentFixture<Work4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Work4Component]
    });
    fixture = TestBed.createComponent(Work4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
