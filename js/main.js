import { criarTarefa } from "./modules/criarTarefa.js";
import { limpa } from "./modules/limparCampo.js";
import { excluir } from "./modules/excluir.js";
import { editar } from "./modules/editar.js";
import { RecuperarTarefas } from "./modules/recuperarTarefas.js";

const adiciona = document.querySelector('.btn');
const tarefa = document.querySelector('.tarefa');


tarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!tarefa.value) return
        criarTarefa(tarefa.value);
        limpa(tarefa);
    }
});

adiciona.addEventListener('click', () => {
    if (!tarefa.value) return;
    criarTarefa(tarefa.value);
    limpa(tarefa);

});

document.addEventListener('click', async (e) => {
    await excluir(e);
    await editar(e);
})

RecuperarTarefas();
