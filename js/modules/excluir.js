import { salvar } from "./salvar.js";
const lista = document.querySelector('.lista');

export async function excluir(e) {
    const el = e.target;
    if (el.classList.contains('b-ex')) {
        const div = el.parentElement;

        Swal.fire({
            title: 'Tem certeza que dejesa remover a tarefa?',
            text: "Essa ação não pode ser desfeita",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#d33',
            cancelButtonText: '<i class="bi bi-x-lg"></i>',
            confirmButtonText: '<i class="bi bi-check-lg"></i>'
        }).then((result) => {
            if (result.isConfirmed) {
                div.parentElement.remove();
                salvar(lista);
            }
        })
    }
}