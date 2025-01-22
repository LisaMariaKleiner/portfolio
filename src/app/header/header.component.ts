import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
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
}
