/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RedemptionListComponent } from './redemption-list.component';

describe('RedemptionListComponent', () => {
  let component: RedemptionListComponent;
  let fixture: ComponentFixture<RedemptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
