export function CriarBtn(receptor) {
    
    const btnApgar = document.createElement('button');
    const btnEditar = document.createElement('button');
    const divBtn = document.createElement('div');

    divBtn.classList.add(
        'd-flex',
        'flex-row',
        'justify-content-center',
        'align-items-center'
    );

    btnApgar.classList.add(
        'btn',
        'btn-danger',
        'ms-1',
        'b-ex',
        'bi',
        'bi-trash3-fill'
    );

    btnEditar.classList.add(
        'btn',
        'btn-primary',
        'b-ed',
        'bi',
        'bi-pencil-fill'
    );

    divBtn.appendChild(btnEditar);
    divBtn.appendChild(btnApgar);
    receptor.appendChild(divBtn);
}