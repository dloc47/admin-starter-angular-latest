/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizConfigComponent } from './quiz-config.component';

describe('QuizConfigComponent', () => {
  let component: QuizConfigComponent;
  let fixture: ComponentFixture<QuizConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
