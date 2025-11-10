/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CtaReportComponent } from './cta-report.component';

describe('CtaReportComponent', () => {
  let component: CtaReportComponent;
  let fixture: ComponentFixture<CtaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
