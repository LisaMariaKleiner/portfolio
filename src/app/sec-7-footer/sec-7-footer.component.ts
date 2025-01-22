import { Component } from '@angular/core';
import { LegalNoticeDialogComponent } from '../legal-notice-dialog/legal-notice-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sec-7-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sec-7-footer.component.html',
  styleUrl: './sec-7-footer.component.scss',
})
export class Sec7FooterComponent {
  constructor(private dialog: MatDialog) {}

  openLegalNotice() {
    // Öffnet die Route in einem neuen Tab oder Fenster
    window.open('/legal-notice-dialog', '_blank', 'width=800,height=600');
  }
}
