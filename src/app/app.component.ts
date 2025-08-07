import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lisa Maria Kleiner';

  constructor(
    private translate: TranslateService,
    public themeService: ThemeService,
    private router: Router,
    private languageService: LanguageService
  ) {
    const lang = localStorage.getItem('selectedLanguage') || 'de';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const lang = localStorage.getItem('selectedLanguage') || 'de';
        this.languageService.switchLanguage(lang);
      }
    });
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
