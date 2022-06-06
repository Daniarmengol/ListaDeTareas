const tareas = new Array();
document.getElementById('add').addEventListener('click', addTarea);
ocument.getElementById('inputBuscarTarea').addEventListener('click', buscadorTareas);
ocument.getElementById('buscarPorPrioridad').addEventListener('click', buscadorTareas);

//Esta función debe crear una nueva tarea según lo que contenga el input y el select, y ñluego. añadirla al array de tareas
function addTarea() {
    console.log(document.getElementById('inputNuevaTarea'));
    const tarea = {
        id: tareas.length + 1,
        nombre: document.getElementById('inputNuevaTarea').value,
        prioridad: document.getElementById('priorityButton').value
    };

    tareas.push(tarea);
    pintarTareas();

}

//Función nueva para pintar el array

function pintarTareas() {
    const ul = document.getElementById('misTareas');
    ul.innerHTML = "";
    tareas.forEach(tarea => {

        let li = document.createElement('li');
        li.classList.add(tarea.prioridad);
        li.innerHTML = `<p>
       ${tarea.nombre}
       </p>

        <div href="#" title="eliminar">
       <i class="fa-solid fa-delete-left"></i>
       </div>`;

        ul.appendChild(li);

    })
}

function buscadorTareas{


}


/* printCharacters(pList, pDom) {
    pDom.innerHTML = "";
    pList.forEach(character => this.printOneCharacter(character, pDom));
}

printOneCharacter(pCharacter, pDom) {
    let article = document.createElement('article');
    article.classList.add('col-12', 'col-md-6', 'col-lg-3');
    let claseColor = "";

    if (pCharacter.status === 'Alive') {
        claseColor = 'text-success';
    } else if (pCharacter.status === 'Dead') {
        claseColor = 'text-danger'
    } else if (pCharacter.status === 'unknown') {
        claseColor = 'text-warning'
    } else {
        claseColor = "";
    }

    article.innerHTML = `<div class="card">
                        <img src="${pCharacter.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${pCharacter.name}</h5>
                            <p class="card-text">Estado: <span class="${claseColor}">${pCharacter.status}</span></p>
                        </div>
                    </div>`

    pDom.appendChild(article);

} */

