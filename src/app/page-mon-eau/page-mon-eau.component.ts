import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-mon-eau',
  templateUrl: './page-mon-eau.component.html',
  styleUrls: ['./page-mon-eau.component.css']
})
export class PageMonEauComponent {
  @Input() nombre: number = 0; //récupérer l'indice de la bdd (de 0 à 5) 


  getColorClass(nombre: number): string {
    // cette fonciton fait changer la couleur de fond du cerlce d'indice (rouge-orange-vert) en fonction du numéro
    if (nombre <= 1) {
      return 'red';
    } else if (nombre <= 3) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}