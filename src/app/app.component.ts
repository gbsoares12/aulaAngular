import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios = [];

  nome = 'Gabriel';
  dataAniversario = new Date(1994, 11, 25);
  preco = 12855.32;
  troco = 0.57392;

  aoAdicionar(funcinario) {
    this.funcionarios.push(funcinario);
  }

  aoRemover(){
    console.log(this.funcionarios.length - 1);
    this.funcionarios.splice(this.funcionarios.length - 1);
    console.log(`Tamanho que o array ficou: ${this.funcionarios.length}`);
  }
}
