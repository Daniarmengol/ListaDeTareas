let tareas = new Array();
document.getElementById('add').addEventListener('click', addTarea);
document.getElementById('inputBuscarTarea').addEventListener('input', buscadorTareas);
document.getElementById('buscarPorPrioridad').addEventListener('change', buscadorTareas);







function addTarea() {

    const tarea = {
        id: tareas.length + 1,
        nombre: document.getElementById('inputNuevaTarea').value,
        prioridad: document.getElementById('priorityButton').value
    };

    tareas.push(tarea);
    document.getElementById('inputNuevaTarea').value = '';
    pintarTareas(tareas);

    localStorage.setItem('misTareas', JSON.stringify(tareas));

}

function pintarTareas(pList) {
    const ul = document.getElementById('misTareas');
    ul.innerHTML = "";

    pList.forEach(tarea => {

        let li = document.createElement('li');
        li.classList.add(tarea.prioridad);
        let p = document.createElement('p');
        p.innerText = tarea.nombre
        let div = document.createElement('div');
        let i = document.createElement('i');
        i.classList.add("fa-solid", "fa-delete-left");
        i.dataset.id = tarea.id;
        i.addEventListener("click", eliminarTarea);

        div.appendChild(i);
        li.append(p, div);
        ul.appendChild(li);


    })


    localStorage.setItem("misTareas", JSON.stringify(tareas));
}



function buscadorTareas() {
    const inputData = document.getElementById('inputBuscarTarea').value;
    const selectData = document.getElementById('buscarPorPrioridad').value;

    let tareasFiltered = [];
    if (inputData !== '' || selectData !== 'all') {
        tareasFiltered = tareas.filter(tarea => inputData !== '' ? tarea.nombre.toLowerCase().includes(inputData.toLowerCase()) : true || selectData !== 'all' ? tarea.prioridad == selectData : true)
        console.log(tareasFiltered);
    } else {
        tareasFiltered = tareas;
    }


    pintarTareas(tareasFiltered);


}

function eliminarTarea(event) {

    /* console.log(event.target.dataset.id) */

    let indice = tareas.findIndex(tarea => tarea.id === parseInt(event.target.dataset.id));
    tareas.splice(indice, 1);

    pintarTareas(tareas);
    localStorage.setItem("misTareas", JSON.stringify(tareas));



}

//localstorage

let storage = localStorage.getItem('misTareas');

if (storage) {
    tareas = JSON.parse(localStorage.getItem('misTareas'));
    pintarTareas(tareas);
}


