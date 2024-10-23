import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-sec-3-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-3-skills.component.html',
  styleUrl: './sec-3-skills.component.scss',
})
export class Sec3SkillsComponent {
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

  @ViewChildren('stackElement') stackElements!: QueryList<any>;

  ngAfterViewInit() {
    this.observeSkills();
  }

  private observeSkills() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            this.isVisible = true;
          }, 300);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.stackElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
