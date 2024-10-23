import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec4ProjectsComponent } from './sec-4-projects.component';

describe('Sec4ProjectsComponent', () => {
  let component: Sec4ProjectsComponent;
  let fixture: ComponentFixture<Sec4ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec4ProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec4ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
