import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec7FooterComponent } from './sec-7-footer.component';

describe('Sec7FooterComponent', () => {
  let component: Sec7FooterComponent;
  let fixture: ComponentFixture<Sec7FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec7FooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec7FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
