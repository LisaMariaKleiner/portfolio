import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sec-5-opinions',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sec-5-opinions.component.html',
  styleUrl: './sec-5-opinions.component.scss',
})
export class Sec5OpinionsComponent implements OnInit, AfterViewInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupScrollHint();
    }, 1000);
  }

  setupScrollHint() {
    const opinionsContainer = document.querySelector('.opinions');
    if (opinionsContainer) {
      opinionsContainer.addEventListener(
        'scroll',
        () => {
          opinionsContainer.classList.add('scrolled');
        },
        { once: true }
      );

      opinionsContainer.addEventListener(
        'touchstart',
        () => {
          opinionsContainer.classList.add('scrolled');
        },
        { once: true }
      );
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  reviews = [
    {
      id: 0,
      name: 'Erik Besser',
      opinion: 'reviews.1.opinion',
    },
    {
      id: 1,
      name: 'Anna Heinrichs',
      opinion: 'reviews.2.opinion',
    },
    {
      id: 2,
      name: 'Enrico Vonderstein',
      opinion: 'reviews.3.opinion',
    },
  ];
}
