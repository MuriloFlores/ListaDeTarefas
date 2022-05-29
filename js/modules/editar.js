import { salvar } from "./salvar.js";
const lista = document.querySelector('.lista');

export async function editar(e) {
    const el = e.target;

    if (el.classList.contains('b-ed')) {
        const btn = el.parentElement;
        const div = btn.parentElement;
        const li = div.firstElementChild;
        console.log(li.innerText)
        let { value: text } = await Swal.fire({
            input: 'text',
            html: '<p class="display-6">Altere a Tarefa</p>',
            inputPlaceholder: 'Tarefa...',
            inputValue: li.innerText,
            confirmButtonText: '<i pointer-events: none class="bi bi-check-lg" ></i>',
            confirmButtonColor: '#198754',
            cancelButtonText: '<i pointer-events: none class="bi bi-x-lg"></i>',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'O campo deve ser preenchido';
                }
            }
        })

        if (text) {
            li.innerText = text;
            salvar(lista)

        }


    }
}


