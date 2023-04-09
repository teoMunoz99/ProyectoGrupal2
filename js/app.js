let form = document.querySelector("form");
let input = form.querySelector("input");
let articulos = document.getElementById("articulo");
// obtener los elementos de la lista de artículos
let articles = Array.from(articulos.getElementsByClassName("card"));

// agregar un evento para escuchar cuando se envía el formulario
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let searchTerm = input.value.toLowerCase();

    console.log(searchTerm);
    // filtrar los artículos que contengan el término de búsqueda
    let filteredArticles = articles.filter((article) => {
        let title = article.querySelector(".card-title").textContent.toLowerCase();
        let text = article.querySelector(".card-text").textContent.toLowerCase();
        return title.includes(searchTerm) || text.includes(searchTerm);
    });

    // mostrar u ocultar los artículos según los resultados de búsqueda
    articles.forEach((article) => {
        if (filteredArticles.includes(article)) {
            article.style.display = "block";
        } else {
            // borramos los articulos que no tenfgan coincidencia con la busqueda
            article.style.display = "none";
        }
    });
});

function mostrarCartel() {
    let div = document.createElement("div");

    div.innerHTML = `
            <div class="col">
                    <div class="card h-100">
                        
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

function eliminarCartel() {
    articulos.removeChild(mostrarTarea.children[3]);
    listasTareas.pop();
}
