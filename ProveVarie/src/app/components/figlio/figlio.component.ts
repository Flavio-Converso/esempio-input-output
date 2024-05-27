import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iPersona } from '../../persona';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrl: './figlio.component.scss',
})
export class FiglioComponent {
  @Input() data!: iPersona[];

  personaX: iPersona = { nome: 'Gianluca', cognome: 'Cazzi' };
  @Output() datiAlPadre = new EventEmitter<iPersona>();

  mandaDati() {
    this.datiAlPadre.emit(this.personaX);
  }
}
