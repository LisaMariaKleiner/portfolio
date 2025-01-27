import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lisa Maria Kleiner';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
