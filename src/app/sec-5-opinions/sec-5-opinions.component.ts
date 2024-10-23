import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sec-5-opinions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sec-5-opinions.component.html',
  styleUrl: './sec-5-opinions.component.scss',
})
export class Sec5OpinionsComponent {
  reviews = [
    {
      name: 'Max Mustermann',
      project: 'Projektname',
      opinion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, arcu eu sollicitudin condimentum, justo velit gravida turpis, at consectetur ligula neque a. Vestibulum suscipi.',
    },
    {
      name: 'Anna Smith',
      project: 'Projektname',
      opinion:
        'Ut vel neque at enim faucibus consectetur. Sed non leo vel massa convallis semssa. Donec vel justo vel ipsum ultricies eleifend. Sed vel massa euismod, tempus arcu id, convallis justo. Nullam condimentum libero.',
    },
    {
      name: 'Peter Johnson',
      project: 'Projektname',
      opinion:
        'Nullam vel enim vel ipsum faucibus consectetur. Donec vel justo vel ipsum ultricies eleifend. Sed vel massa euismod, tempus arcu id, convallis justo. Nullam condimentum libero id bibendum tristique. Sed convallis.',
    },
  ];
}
