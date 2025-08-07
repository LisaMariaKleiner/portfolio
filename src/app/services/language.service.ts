import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('selectedLanguage');
    const lang = savedLang ? savedLang : 'de';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }
}
