import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  //Construtor da classe ListarTarefaComponent
  constructor(private tarefaService: TarefaService) { 

  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    /*this.tarefas = [
      new Tarefa(1, "Tarefa1", false),
      new Tarefa(2, "Tarefa 2", true)
    ];*/
  }
  //Listas todas as tarefas
  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  //Remove tarefas
  remover ($event: any, tarefa: Tarefa): void{
    $event.preventeDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
  }

}
