import { Component } from '@angular/core';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice-dialog',
  standalone: true,
  imports: [Sec7FooterComponent, HeaderComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class privacyPolicyComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
