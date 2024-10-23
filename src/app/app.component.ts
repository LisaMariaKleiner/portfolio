import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Sec1StartpageComponent } from './sec-1-startpage/sec-1-startpage.component';
import { Sec2DescriptionComponent } from './sec-2-description/sec-2-description.component';
import { Sec3SkillsComponent } from './sec-3-skills/sec-3-skills.component';
import { Sec4ProjectsComponent } from './sec-4-projects/sec-4-projects.component';
import { Sec5OpinionsComponent } from './sec-5-opinions/sec-5-opinions.component';
import { Sec6ContactComponent } from './sec-6-contact/sec-6-contact.component';
import { Sec7FooterComponent } from './sec-7-footer/sec-7-footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Sec1StartpageComponent,
    Sec2DescriptionComponent,
    Sec3SkillsComponent,
    Sec4ProjectsComponent,
    Sec5OpinionsComponent,
    Sec6ContactComponent,
    Sec7FooterComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Lisa Maria Kleiner';
}
