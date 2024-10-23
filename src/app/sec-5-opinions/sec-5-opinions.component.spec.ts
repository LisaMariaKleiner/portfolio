import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec5OpinionsComponent } from './sec-5-opinions.component';

describe('Sec5OpinionsComponent', () => {
  let component: Sec5OpinionsComponent;
  let fixture: ComponentFixture<Sec5OpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec5OpinionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec5OpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
