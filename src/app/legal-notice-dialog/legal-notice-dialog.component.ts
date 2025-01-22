import { Component } from '@angular/core';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-legal-notice-dialog',
  standalone: true,
  imports: [Sec7FooterComponent, RouterLink, HeaderComponent],
  templateUrl: './legal-notice-dialog.component.html',
  styleUrl: './legal-notice-dialog.component.scss',
})
export class LegalNoticeDialogComponent {}
