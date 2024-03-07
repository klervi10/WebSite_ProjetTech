import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-mon-air',
  templateUrl: './page-mon-air.component.html',
  styleUrls: ['./page-mon-air.component.css']
})
export class PageMonAirComponent {
  @Input() nombre: number = 5; //récupérer l'indice de la bdd 


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
