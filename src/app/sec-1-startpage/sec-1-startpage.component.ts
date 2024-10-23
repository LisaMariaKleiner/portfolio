import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-1-startpage',
  standalone: true,
  imports: [],
  templateUrl: './sec-1-startpage.component.html',
  styleUrl: './sec-1-startpage.component.scss',
})
export class Sec1StartpageComponent {
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
}
