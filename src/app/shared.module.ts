import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { Sec1StartpageComponent } from './sec-1-startpage/sec-1-startpage.component';
import { Sec2DescriptionComponent } from './sec-2-description/sec-2-description.component';
import { Sec3SkillsComponent } from './sec-3-skills/sec-3-skills.component';
import { Sec4ProjectsComponent } from './sec-4-projects/sec-4-projects.component';
import { Sec5OpinionsComponent } from './sec-5-opinions/sec-5-opinions.component';
import { Sec6ContactComponent } from './sec-6-contact/sec-6-contact.component';
import { Sec7FooterComponent } from './sec-7-footer/sec-7-footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    Sec1StartpageComponent,
    Sec2DescriptionComponent,
    Sec3SkillsComponent,
    Sec4ProjectsComponent,
    Sec5OpinionsComponent,
    Sec6ContactComponent,
    Sec7FooterComponent,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    Sec1StartpageComponent,
    Sec2DescriptionComponent,
    Sec3SkillsComponent,
    Sec4ProjectsComponent,
    Sec5OpinionsComponent,
    Sec6ContactComponent,
    Sec7FooterComponent,
  ],
})
export class SharedModule {}
