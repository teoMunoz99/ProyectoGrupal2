let form = document.querySelector("form");
let input = form.querySelector("input");
let articulos = document.getElementById("articulo");

// obtener los elementos de la lista de artículos
let arrayDeArticulos = Array.from(articulos.getElementsByClassName("card"));

// agregar un evento para escuchar cuando se envía el formulario
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let inputValue = input.value.toLowerCase();
    if (inputValue === "") {
        alert("El campo está vacío");
    } else {
        // filtrar los artículos que contengan el término de búsqueda
        let filtrosArticulos = arrayDeArticulos.filter((article) => {
            let title = article.querySelector(".card-title").textContent.toLowerCase();
            let text = article.querySelector(".card-text").textContent.toLowerCase();
            return title.includes(inputValue) || text.includes(inputValue);
        });

        // mostrar u ocultar los artículos según los resultados de búsqueda
        arrayDeArticulos.forEach((article) => {
            if (filtrosArticulos.includes(article)) {
                article.style.display = "block";
            } else {
                // borramos los articulos que no tenfgan coincidencia con la busqueda
                article.style.display = "none";
            }
        });

        filtrosArticulos.length >= 1 ? eliminarCartel() : mostrarCartel();
    }
});

// mostrame un cartel de busqueda fallida
function mostrarCartel() {
    let div = document.createElement("div");

    div.innerHTML = `
            <div class="col">
                    <div class="card text-bg-danger h-100">                        
                        <div class="card-body">
                            <h5 class="card-title">
                            No se encontraron articulos relacionados con tu busqueda
                            </h5>
                        </div>
                    </div>
            </div>
    `;

    articulos.appendChild(div);
}

// elimina el cartel
function eliminarCartel() {
    articulos.children[4] !== undefined
        ? articulos.removeChild(articulos.children[4])
        : "";
}
// agregar un evento para escuchar cuando se borra el contenido del campo de entrada
input.addEventListener("input", function () {
    if (input.value.trim() === "") {
        // si el campo está vacío mostrar todos los artículos nuevamente
        arrayDeArticulos.forEach((article) => {
            article.style.display = "block";
        });
        eliminarCartel();
    }
});