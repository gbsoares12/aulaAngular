import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstilosCartao() {
    return {
      borderWidth: '5px',
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgrey'
    };
  }

  getClassesCss() {
    return ['badge', 'badge-primary'];
  }

  isAdmin() {
    return this.funcionario.nome.startsWith('T'); // Serve para pegar a primeira letra da string
  }
}
