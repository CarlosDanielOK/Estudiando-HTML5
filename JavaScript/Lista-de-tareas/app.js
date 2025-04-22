// Seleccionar los elementos HMTL.
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

boton.addEventListener('click', agregarTarea); // cuando el usuario haga click en el boton "Crear tarea" ejecuta la funcion agregarTarea
input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        agregarTarea();
    }
}); // keydown significa que cuando el usuario presione una tecla se ejecuta la funcion. event.key devuelve que tecla fue presionada, entonces si la tecla presionada es "Enter" ejecuta la funcion agregarTarea

// Crear y agreagar una tarea a la lista de tareas
// en el DOM.
function agregarTarea() {
    if (input.value) { // evalua si el input tiene texto (true) o si esta vacio (false)
        // Crear tarea.
        let tareaNueva = document.createElement('div'); // crea un div
        tareaNueva.classList.add('tarea'); // agrega la clase "tarea" al div para darle estilos con css

        // Texto ingresado por el usuario.
        let texto = document.createElement('p'); // crea un elemento p
        texto.innerText = input.value; // añade el valor del input (lo que escribio el usuario) a p
        tareaNueva.appendChild(texto); // agrega texto(p) como hijo de tareaNueva(div)

        // Crear y agregar contenedor de los iconos
        let iconos = document.createElement('div'); // crea un div
        iconos.classList.add('iconos'); // agrega la clase "iconos" al elemento iconos(div)
        tareaNueva.appendChild(iconos); // agrega iconos(div) como hijo de tareaNueva(div)

        // Crear y agregar iconos.
        // agrega icono de completar
        let completar = document.createElement('i'); // i porque es icono de boostrap
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar'); // agrega tres clases al elemento i, las dos primeras son clases predeterminadas de i de boostrap y la tercera es para darle estilos con css
        completar.addEventListener('click', completarTarea); // cuando el usuario haga click en el icono de completado ejecuta la funcion completarTarea

        // agrega icono de eliminar
        let eliminar = document.createElement('i'); // i porque es de boostrap
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar'); // agrega tres clases al elemento i, las dos primeras son clases predeterminadas de i de boostrap y la tercera es para darle estilos con css
        eliminar.addEventListener('click', eliminarTarea); // cuando el usuario haga click en el icono de eliminar ejecuta la funcion eliminarTarea

        iconos.append(completar, eliminar); // agrega los elementos i (iconos de completar y eliminar) como hijos de iconos(div)

        // Agregar la tarea a la lista.
        listaDeTareas.appendChild(tareaNueva);
    } else { // en caso de que el usuario no escribio nada
        alert('Por favor ingresa una tarea.');
    }
}

// Marcar una tarea como completada.
function completarTarea(event) {
    let tarea = event.target.parentNode.parentNode; // event.target devolvera el elemento icono donde se hizo click, pero como necesitamos modificar el estilo del div completo viajamos al padre del div(div class="iconos") y luego al padre de ese div(div class="tarea")
    tarea.classList.toggle('completada'); // toggle eliminara la clase "completada" si ya existe, o agrega la clase "completada" si no existe
}

// Eliminar una tarea del DOM.
function eliminarTarea(event) {
    let tarea = event.target.parentNode.parentNode; // event.target devolvera el elemento icono donde se hizo click, pero como necesitamos modificar el estilo del div completo viajamos al padre del div(div class="iconos") y luego al padre de ese div(div class="tarea")
    tarea.remove(); // elimina el div completo que a su vez contiene sus iconos y el texto
}