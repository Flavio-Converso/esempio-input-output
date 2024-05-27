import { Component } from '@angular/core';
import { iPersona } from './persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Titolo pagina';
  persone: iPersona[] = [
    { nome: 'Mario', cognome: 'Rossi' },
    { nome: 'Luca', cognome: 'Bianchi' },
    { nome: 'Giovanni', cognome: 'Verdi' },
  ];
  onRiceviDati(event: iPersona) {
    console.log(event);
  }
}
