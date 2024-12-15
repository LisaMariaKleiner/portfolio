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

  openLegalNoticeDialog(): void {
    this.dialog.open(LegalNoticeDialogComponent, {
      width: '100vw',
    });
  }
}
