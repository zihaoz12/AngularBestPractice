/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyDropDownComponent } from './MyDropDown.component';

describe('MyDropDownComponent', () => {
  let component: MyDropDownComponent;
  let fixture: ComponentFixture<MyDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
