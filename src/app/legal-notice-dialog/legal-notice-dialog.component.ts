import { Component } from '@angular/core';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-legal-notice-dialog',
  standalone: true,
  imports: [Sec7FooterComponent, HeaderComponent],
  templateUrl: './legal-notice-dialog.component.html',
  styleUrl: './legal-notice-dialog.component.scss',
})
export class LegalNoticeDialogComponent {}
