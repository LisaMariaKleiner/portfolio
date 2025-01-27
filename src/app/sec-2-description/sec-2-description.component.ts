import { Component } from '@angular/core';
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
export class Sec2DescriptionComponent {
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
}
