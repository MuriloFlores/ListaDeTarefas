export function salvar (tarefas){
    const liTarefa = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (const tarefa of liTarefa) {
        let textoTarefa = tarefa.innerText;
        listaDeTarefas.push(textoTarefa);    
    }

    const JSONtarefas = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', JSONtarefas);
    
}