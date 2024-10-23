import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec6ContactComponent } from './sec-6-contact.component';

describe('Sec6ContactComponent', () => {
  let component: Sec6ContactComponent;
  let fixture: ComponentFixture<Sec6ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec6ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec6ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
