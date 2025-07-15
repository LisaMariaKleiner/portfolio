import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
  }

  switchLanguage(lang: string): void {
    this.languageService.switchLanguage(lang);
  }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      const socialMediaButtons = document.querySelector(
        '.social_media_buttons'
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (socialMediaButtons) {
                socialMediaButtons.classList.add('visible');
              }
            }
          });
        },
        {
          threshold: 0.8,
        }
      );

      if (socialMediaButtons) {
        observer.observe(socialMediaButtons);
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth > 1150 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu open:', this.isMenuOpen);
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
