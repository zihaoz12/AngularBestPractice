/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardsgameComponent } from './Cardsgame.component';

describe('CardsgameComponent', () => {
  let component: CardsgameComponent;
  let fixture: ComponentFixture<CardsgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
