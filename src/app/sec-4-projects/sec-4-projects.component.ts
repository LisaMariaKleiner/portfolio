import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-sec-4-projects',
  standalone: true,
  imports: [],
  templateUrl: './sec-4-projects.component.html',
  styleUrl: './sec-4-projects.component.scss',
})
export class Sec4ProjectsComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

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
