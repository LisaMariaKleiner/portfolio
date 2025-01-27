import { Component, Renderer2, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sec-4-projects',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './sec-4-projects.component.html',
  styleUrl: './sec-4-projects.component.scss',
})
export class Sec4ProjectsComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

  ngOnInit() {
    this.muteAllMedia();
  }

  muteAllMedia() {
    const audioElements = document.querySelectorAll('audio');
    const videoElements = document.querySelectorAll('video');

    audioElements.forEach((audio) => {
      this.renderer.setProperty(audio, 'muted', true);
    });

    videoElements.forEach((video) => {
      this.renderer.setProperty(video, 'muted', true);
    });
  }
}
