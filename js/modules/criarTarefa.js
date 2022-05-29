import { CriarBtn } from "./btns.js";
import { Criali } from "./criaLi.js";
import { criaSpan } from "./criaSpan.js";
import { salvar } from "./salvar.js";

const lista = document.querySelector('.lista');

export function criarTarefa(input) {
    const li = Criali();
    const span = criaSpan();

    span.innerText = input;
    li.classList.add(
        'list-group-item',
        'list-group-item-secondary',
        'd-flex',
        'flex-row',
        'justify-content-between',
        'align-items-center'
    );

    li.appendChild(span);
    CriarBtn(li);
    lista.appendChild(li);
    salvar(lista)
}



