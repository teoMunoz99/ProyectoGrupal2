const form = document.querySelector("form");
const input = form.querySelector("input");
const articulos = document.getElementById("articulo");

// obtener los elementos de la lista de artículos
const articles = Array.from(articulos.getElementsByClassName("card"));
// console.log(articles);
// agregar un evento para escuchar cuando se envía el formulario
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = input.value.toLowerCase(); // obtener el término de búsqueda
    console.log(searchTerm);
    // filtrar los artículos que contengan el término de búsqueda
    const filteredArticles = articles.filter((article) => {
        const title = article.querySelector(".card-title").textContent.toLowerCase();
        const text = article.querySelector(".card-text").textContent.toLowerCase();
        return title.includes(searchTerm) || text.includes(searchTerm);
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
