import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

interface ImageSet {
  img: string;
  hoverImg: string;
}

interface Images {
  remote: ImageSet;
  location: ImageSet;
  koffer: ImageSet;
}

@Component({
  selector: 'app-sec-2-description',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './sec-2-description.component.html',
  styleUrl: './sec-2-description.component.scss',
})
export class Sec2DescriptionComponent implements OnInit, OnDestroy {
  private animationId: number = 0;
  private startTime: number = 0;

  // Orb positions for floating animation
  orbPositions = {
    orb1: 0,
    orb2: 0,
    orb3: 0,
    orb4: 0,
  };

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  images: Images = {
    location: {
      img: '../../assets/img/location.svg',
      hoverImg: '../../assets/img/location-hover.svg',
    },

    remote: {
      img: '../../assets/img/remote.svg',
      hoverImg: '../../assets/img/remote-hover.svg',
    },

    koffer: {
      img: '../../assets/img/koffer.svg',
      hoverImg: '../../assets/img/koffer-hover.svg',
    },
  };

  changeImage(imageKey: keyof Images, newImg: string) {
    this.images[imageKey].img = newImg;
  }

  resetImage(imageKey: keyof Images) {
    switch (imageKey) {
      case 'remote':
        this.images[imageKey].img = '../../assets/img/remote.svg';
        break;
      case 'location':
        this.images[imageKey].img = '../../assets/img/location.svg';
        break;
      case 'koffer':
        this.images[imageKey].img = '../../assets/img/koffer.svg';
        break;
    }
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  ngOnInit() {
    this.startFloatingAnimation();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private startFloatingAnimation() {
    this.startTime = performance.now();
    this.animate();
  }

  private animate = () => {
    const currentTime = performance.now();
    const elapsed = (currentTime - this.startTime) / 1000; // Convert to seconds

    // Create floating animations with different speeds and amplitudes
    this.orbPositions.orb1 = Math.sin(elapsed * 0.8) * 15;
    this.orbPositions.orb2 = Math.sin(elapsed * 1.2 + Math.PI / 3) * 20;
    this.orbPositions.orb3 = Math.sin(elapsed * 0.6 + Math.PI / 2) * 12;
    this.orbPositions.orb4 = Math.sin(elapsed * 1.5 + Math.PI) * 18;

    this.animationId = requestAnimationFrame(this.animate);
  };

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    // Add parallax effect on scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const parallaxOffset = scrollTop * 0.3;

    // You can modify orb positions based on scroll here
    // This creates a subtle parallax effect
  }
}
