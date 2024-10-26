import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-legal-notice-dialog',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice-dialog.component.html',
  styleUrl: './legal-notice-dialog.component.scss',
})
export class LegalNoticeDialogComponent {
  constructor(public dialogRef: MatDialogRef<LegalNoticeDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
