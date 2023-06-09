/*=============== Comentarios ============================================================= */

//==============Declaro variables y traigo elementos===============//
const comentarioIngresado = document.getElementById("inputComentarios"); //input
const botonAgregar = document.getElementById("botonAgregar"); //boton "agregar"
const ul = document.getElementById("ulComentarios"); //ul donde voy a agregar o borrar los comentarios hechos
const formModal = document.getElementById("formModal");
const nombre = document.getElementById("nombre");
//=================funciones=====================//
function agregarComentario(e) {
    e.preventDefault();

    //guardo en la variable comentario el valor del input
    if (comentarioIngresado.value === "") {
        return alert("Debe ingresar un comentario");
    }
    mostrarModalUser();
}

function agregarLista(nombre) {
    let user = nombre;
    let comentario = comentarioIngresado.value;

    //creo el li que voy a meter en el ul
    const li = document.createElement("li");
    li.className = "d-flex justify-content-between border-bottom mb-5";

    //en la variable p guardo el texto que va tener el li
    const p = document.createElement("p");

    //guardo el contenido del input que estaba en la variable comentario dentro del p
    p.textContent = user + ": " + comentario;

    //añado el p en el li
    li.appendChild(p);

    //añado el boton de borrar dentro del li
    li.appendChild(botonBorrar());

    //ahora añado el li al ul
    ul.appendChild(li);

    //borro el valor de input luego de agregar una comentario
    comentarioIngresado.value = "";
}

//funcion para agregar un boton de borrado
function botonBorrar() {
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "btn btn-danger";
    btnBorrar.addEventListener("click", (e) => {
        const comentarioBorrar = e.target.parentElement;
        ul.removeChild(comentarioBorrar);
    });

    return btnBorrar;
}

//==========agrego eventos=============//
botonAgregar.addEventListener("click", agregarComentario);
formModal.addEventListener("submit", agregarUser);

/* Modal */

const modalUser = new bootstrap.Modal(document.getElementById("modalAgregar"));

function mostrarModalUser() {
    modalUser.show(); //mostramos modal
}

function agregarUser(e) {
    e.preventDefault();
    let user = nombre.value;
    agregarLista(user);
    modalUser.hide(); //cerramos modal
}
