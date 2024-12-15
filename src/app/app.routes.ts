import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NgModule } from '@angular/core';
import { LegalNoticeDialogComponent } from './legal-notice-dialog/legal-notice-dialog.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'legal-notice-dialog', component: LegalNoticeDialogComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
