import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V10Component } from './v10.component';

describe('V10Component', () => {
  let component: V10Component;
  let fixture: ComponentFixture<V10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ V10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(V10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
