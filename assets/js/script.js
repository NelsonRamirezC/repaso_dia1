//let formulario = document.getElementById("formContact");
formContact.addEventListener("submit", function (event) {
    event.preventDefault();
    /* console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value); */

    alert(`Gracias por contactarse con nosotros\nGracias: ${formContactName.value}!
    `);
});
