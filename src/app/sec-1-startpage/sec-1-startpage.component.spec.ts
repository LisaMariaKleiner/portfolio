import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec1StartpageComponent } from './sec-1-startpage.component';

describe('Sec1StartpageComponent', () => {
  let component: Sec1StartpageComponent;
  let fixture: ComponentFixture<Sec1StartpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec1StartpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec1StartpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
