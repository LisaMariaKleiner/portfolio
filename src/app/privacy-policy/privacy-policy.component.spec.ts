import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalNoticeDialogComponent } from './privacy-policy.component';

describe('LegalNoticeDialogComponent', () => {
  let component: LegalNoticeDialogComponent;
  let fixture: ComponentFixture<LegalNoticeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticeDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNoticeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
