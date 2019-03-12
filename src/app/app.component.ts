import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios = [];

  aoAdicionar(funcinario){
    this.funcionarios.push(funcinario);
  }

  aoRemover(){
    console.log(this.funcionarios.length - 1);
    this.funcionarios.splice(this.funcionarios.length - 1);
    console.log(`Tamanho que o array ficou: ${this.funcionarios.length}`);
  }
}
