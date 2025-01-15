import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sec-1-startpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-1-startpage.component.html',
  styleUrl: './sec-1-startpage.component.scss',
})
export class Sec1StartpageComponent {
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
