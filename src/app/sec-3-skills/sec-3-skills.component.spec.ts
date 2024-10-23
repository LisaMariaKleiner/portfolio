import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sec3SkillsComponent } from './sec-3-skills.component';

describe('Sec3SkillsComponent', () => {
  let component: Sec3SkillsComponent;
  let fixture: ComponentFixture<Sec3SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sec3SkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sec3SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
