import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Gabriel';
  idade = 24;
  adicionado = false;

  getIdade() {
    return this.idade;
  }

  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar(nome: string) {
    console.log(`Adicionado: ${this.nome}`)
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

  @Output() removerFuncionario = new EventEmitter();

  remover(){
    this.removerFuncionario.emit();
  }
  
}
