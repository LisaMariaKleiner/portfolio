import { RouterModule, Routes } from '@angular/router';
import { Sec1StartpageComponent } from './sec-1-startpage/sec-1-startpage.component';
import { Sec2DescriptionComponent } from './sec-2-description/sec-2-description.component';
import { Sec3SkillsComponent } from './sec-3-skills/sec-3-skills.component';
import { Sec4ProjectsComponent } from './sec-4-projects/sec-4-projects.component';
import { Sec5OpinionsComponent } from './sec-5-opinions/sec-5-opinions.component';
import { Sec6ContactComponent } from './sec-6-contact/sec-6-contact.component';
import { Sec7FooterComponent } from './sec-7-footer/sec-7-footer.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Sec1StartpageComponent },
  { path: 'sec-2-description', component: Sec2DescriptionComponent },
  { path: 'sec-3-skills', component: Sec3SkillsComponent },
  { path: 'sec-4-projects', component: Sec4ProjectsComponent },
  { path: 'sec-5-opinions', component: Sec5OpinionsComponent },
  { path: 'sec-6-contact', component: Sec6ContactComponent },
  { path: 'sec-7-footer', component: Sec7FooterComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
