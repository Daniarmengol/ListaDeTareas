const tareas = new Array();
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

}

function pintarTareas(pList) {
    const ul = document.getElementById('misTareas');
    ul.innerHTML = "";
    //Añadir en el div el evento click que llama a la función de borrado y le pasa por parametro el id de la tarea
    //ej:  <div href="#" onclick="deleteTarea(tarea.id)" title="eliminar">
    pList.forEach(tarea => {

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

    //Setear el array pList en localStorage
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

//Crear función checkLocalStorage que compruebe si existe infromación guardada, y si existe, pintarla. Hay que llamar a esta función nada más empezar.
//ej: function checkLocalStorage(){...}
//checkLocalStorage()

//Crear función de borrado, que recibe por parametro el id de la tarea, la borra del array y pinta de nuevo
// ej: funtion deleteTarea(id){...}

