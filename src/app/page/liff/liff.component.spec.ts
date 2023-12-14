import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiffComponent } from './liff.component';

describe('LiffComponent', () => {
  let component: LiffComponent;
  let fixture: ComponentFixture<LiffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiffComponent]
    });
    fixture = TestBed.createComponent(LiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
