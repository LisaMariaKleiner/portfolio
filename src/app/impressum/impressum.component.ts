import { Component } from '@angular/core';
import { Sec7FooterComponent } from '../sec-7-footer/sec-7-footer.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [Sec7FooterComponent, RouterLink, HeaderComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss',
})
export class ImpressumComponent {}
