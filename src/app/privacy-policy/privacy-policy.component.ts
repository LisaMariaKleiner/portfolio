import { Component } from '@angular/core';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';
import { HeaderComponent } from '../header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Nl2brPipe } from '../pipes/context.pipe';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [Sec7FooterComponent, HeaderComponent, TranslateModule, Nl2brPipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class privacyPolicyComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    translate.use('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
