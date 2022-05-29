import { criarTarefa } from "./criarTarefa.js";

export function RecuperarTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}