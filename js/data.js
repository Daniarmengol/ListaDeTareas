const tareas = new Array({
    id: 1,
    nombre: 'Tarea 1',
    prioridad: "urgente"

},
    {
        id: 2,
        nombre: 'Tarea 2',
        prioridad: "tan poco es pa tanto"

    },
    {
        id: 3,
        nombre: 'Tarea 3',
        prioridad: "pa mañana"

    },
    {
        id: 4,
        nombre: 'Tarea 4',
        prioridad: "urgente"

    },


);
document.getElementById('add').addEventListener('click', addTarea);


//Esta función debe crear una nueva tarea según lo que contenga el input y el select, y ñluego. añadirla al array de tareas
function addTarea() {
    console.log(document.getElementById('inputNuevaTarea'));
    const tarea = {
        id: tareas.length + 1,
        nombre: document.getElementById('inputNuevaTarea').value,
        prioridad: document.getElementById('priorityButton').value
    };



    console.log(tarea);

}


