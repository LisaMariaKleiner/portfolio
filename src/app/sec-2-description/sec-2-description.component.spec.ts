import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec2DescriptionComponent } from './sec-2-description.component';

describe('Sec2DescriptionComponent', () => {
  let component: Sec2DescriptionComponent;
  let fixture: ComponentFixture<Sec2DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec2DescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec2DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
