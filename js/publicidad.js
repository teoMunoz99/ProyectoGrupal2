setTimeout(function () {
    document.getElementById("publicidadModal").style.display = "block";
}, 4000);

document.getElementById("cerrarPublicidad").addEventListener("click", function () {
    document.getElementById("publicidadModal").style.display = "none";
});
