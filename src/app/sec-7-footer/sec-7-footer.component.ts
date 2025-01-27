import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sec-7-footer',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './sec-7-footer.component.html',
  styleUrl: './sec-7-footer.component.scss',
})
export class Sec7FooterComponent {
  constructor(private dialog: MatDialog, private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  openLegalNotice() {
    // Öffnet die Route in einem neuen Tab oder Fenster
    window.open('/privacy-policy', '_blank', 'width=800,height=600');
  }
}
