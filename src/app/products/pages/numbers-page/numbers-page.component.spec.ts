/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumbersPageComponent } from './numbers-page.component';

describe('NumbersPageComponent', () => {
  let component: NumbersPageComponent;
  let fixture: ComponentFixture<NumbersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
