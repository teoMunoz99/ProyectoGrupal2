/*  
En la página principal deben mostrar una barra de búsqueda que permita 
filtrar los artículos existentes por los que coincidan con los términos de 
la búsqueda, si ningún posteo coincide mostrar el mensaje ‘no se encuentra 
un artículo con los términos ingresados’. 
Presionando un botón o borrando todos los caracteres del campo de búsqueda
 se deben mostrar nuevamente
 */

// obtener elementos del DOM
const form = document.querySelector("form");
const input = form.querySelector("input");
const articleList = document.querySelector("#article-list");

// obtener los elementos de la lista de artículos
const articles = Array.from(articleList.getElementsByTagName("li"));

// agregar un evento para escuchar cuando se envía el formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevenir la recarga de la página

    const searchTerm = input.value.toLowerCase(); // obtener el término de búsqueda

    // filtrar los artículos que contengan el término de búsqueda
    const filteredArticles = articles.filter((article) => {
        const title = article.textContent.toLowerCase();
        return title.includes(searchTerm);
    });

    // mostrar u ocultar los artículos según los resultados de búsqueda
    articles.forEach((article) => {
        if (filteredArticles.includes(article)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});

// agregar un evento para escuchar cuando se borra el contenido del campo de entrada
input.addEventListener("input", function () {
    if (input.value.trim() === "") {
        // si el campo está vacío, mostrar todos los artículos nuevamente
        articles.forEach((article) => {
            article.style.display = "block";
        });
    }
});

/* 
<form>
  <input type="text" placeholder="Buscar...">
</form>

<ul id="article-list">
  <li>Título del artículo 1</li>
  <li>Título del artículo 2</li>
  <li>Título del artículo 3</li>
  <li>Título del artículo 4</li>
  <li>Título del artículo 5</li>
</ul>
 */
