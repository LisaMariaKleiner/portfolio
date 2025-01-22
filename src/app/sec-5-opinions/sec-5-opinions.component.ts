import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      name: 'Erik Besser',

      opinion:
        'Lisa ist eine talentierte Frontend-Entwicklerin mit Schwerpunkt auf Angular und modernen Webtechnologien. Sie überzeugt durch sauberen, performanten Code und ein exzellentes Gespür für nutzerfreundliche Interfaces. Ihre Fähigkeit, Designvorgaben detailgenau umzusetzen und dabei eng mit Teams zusammenzuarbeiten, macht sie zu einer wertvollen Bereicherung für jedes Projekt. Komplexe Herausforderungen löst sie effizient und liefert Ergebnisse, die technisch und visuell überzeugen.',
    },
    {
      name: 'Anna Heinrichs',
      opinion:
        'Lisa ist eine erfahrene Frontend-Entwicklerin mit Fokus auf Angular, die technisches Know-how mit kreativer Problemlösung kombiniert. Sie punktet mit ihrer strukturierten Arbeitsweise, ihrem Blick für Details und ihrer Fähigkeit, auch unter Zeitdruck hochwertige Ergebnisse zu liefern. Dank ihrer starken Kommunikations- und Teamfähigkeiten fördert sie die Zusammenarbeit und trägt maßgeblich zum Projekterfolg bei. Ihre Leidenschaft für modernes Webdesign spiegelt sich in nutzerfreundlichen, performanten Anwendungen wider.',
    },
    {
      name: 'Enrico Vonderstein',
      opinion:
        'ist eine vielseitige Softwareentwicklerin mit Schwerpunkt auf Angular, die komplexe Anforderungen in intuitive Lösungen umsetzt. Sie überzeugt durch ihre analytische Denkweise, zuverlässige Arbeitsweise und ein hohes Maß an Eigeninitiative. Besonders schätzt man ihre Fähigkeit, auch bei Herausforderungen den Überblick zu behalten und schnell praktikable Ansätze zu finden. Ihre Projekte zeichnen sich durch technische Präzision und eine klare Benutzerorientierung aus.',
    },
  ];
}
