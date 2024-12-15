import { Component } from '@angular/core';
import { Sec1StartpageComponent } from '../sec-1-startpage/sec-1-startpage.component';
import { Sec2DescriptionComponent } from '../sec-2-description/sec-2-description.component';
import { Sec4ProjectsComponent } from '../sec-4-projects/sec-4-projects.component';
import { Sec3SkillsComponent } from '../sec-3-skills/sec-3-skills.component';
import { Sec5OpinionsComponent } from '../sec-5-opinions/sec-5-opinions.component';
import { Sec6ContactComponent } from '../sec-6-contact/sec-6-contact.component';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    Sec1StartpageComponent,
    Sec2DescriptionComponent,
    Sec4ProjectsComponent,
    Sec3SkillsComponent,
    Sec5OpinionsComponent,
    Sec6ContactComponent,
    Sec7FooterComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
