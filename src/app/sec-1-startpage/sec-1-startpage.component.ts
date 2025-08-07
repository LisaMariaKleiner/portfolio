import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sec-1-startpage',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sec-1-startpage.component.html',
  styleUrl: './sec-1-startpage.component.scss',
})
export class Sec1StartpageComponent implements OnInit, OnDestroy {
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('hamburger') hamburger!: ElementRef;
  private observer: IntersectionObserver | undefined;
  isMenuOpen = false;

  constructor(
    private translate: TranslateService,
    public themeService: ThemeService
  ) {
    const lang = localStorage.getItem('selectedLanguage') || 'de';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  ngOnInit(): void {
    const lang = localStorage.getItem('selectedLanguage') || 'de';
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

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

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && this.isMenuOpen) {
            this.isMenuOpen = false;
          }
        });
      },
      { threshold: 0 }
    );

    setTimeout(() => {
      if (this.hamburger) {
        this.observer?.observe(this.hamburger.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const windowWidth = (event.target as Window).innerWidth;
    if (windowWidth > 1150 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.dropdownMenu || !this.hamburger) return;

    const targetElement = event.target as HTMLElement;
    const clickedInside =
      this.dropdownMenu.nativeElement.contains(targetElement) ||
      this.hamburger.nativeElement.contains(targetElement);

    if (!clickedInside && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
