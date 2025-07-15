import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-sec-3-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-3-skills.component.html',
  styleUrl: './sec-3-skills.component.scss',
})
export class Sec3SkillsComponent implements AfterViewInit {
  portfolioItems = [
    { img: '../../assets/img/angular.svg', text: 'Angular' },
    { img: '../../assets/img/ts.svg', text: 'TypeScript' },
    { img: '../../assets/img/js.svg', text: 'JavaScript' },
    { img: '../../assets/img/html.svg', text: 'HTML' },
    { img: '../../assets/img/firebase.svg', text: 'Firebase' },
    { img: '../../assets/img/git.svg', text: 'Git' },
    { img: '../../assets/img/css.svg', text: 'CSS' },
    { img: '../../assets/img/api.svg', text: 'Rest-Api' },
    { img: '../../assets/img/materialdesign.svg', text: 'Material Design' },
    { img: '../../assets/img/scrum.svg', text: 'Scrum' },
    { img: '../../assets/img/mindset.svg', text: 'Growth mindset' },
  ];

  isVisible: boolean = false;
  isWhirlwindActive: boolean = false;

  @ViewChildren('stackElement') stackElements!: QueryList<ElementRef>;
  @ViewChild('skillContainer') skillContainer!: ElementRef;

  ngAfterViewInit() {
    this.observeSkills();
  }

  private observeSkills() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startSlideInAnimation();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (this.skillContainer) {
      observer.observe(this.skillContainer.nativeElement);
    }
  }

  private startSlideInAnimation() {
    this.stackElements.forEach((element, index) => {
      const nativeEl = element.nativeElement;

      const isEven = index % 2 === 0;
      const startPosition = isEven ? '-100px' : '100px';

      nativeEl.style.opacity = '0';
      nativeEl.style.transform = `translateX(${startPosition})`;
      nativeEl.style.transition = 'none';

      setTimeout(() => {
        nativeEl.style.transition = 'all 0.6s ease-out';
        nativeEl.style.opacity = '1';
        nativeEl.style.transform = 'translateX(0)';
      }, index * 150);
    });
  }
}
