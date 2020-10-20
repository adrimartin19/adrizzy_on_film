import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrete1Component } from './carrete1.component';

describe('Carrete1Component', () => {
  let component: Carrete1Component;
  let fixture: ComponentFixture<Carrete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carrete1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Carrete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
