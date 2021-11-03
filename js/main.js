
// Instancia del slider
document.addEventListener("DOMContentLoaded", () => {
    const elementosSlider = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosSlider, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
    });
});

//instancia de los select
document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
});

//instancia del datepicker
document.addEventListener("DOMContentLoaded", () => {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems);
});

//instancia de conteo de letras
$(document).ready(() => {
    $('textarea#comentario, input#nombre, input#apellido, input#email, input#telf').characterCounter();
});

//funcion validar
function validar() {

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let telf = document.getElementById("telf");
    let tam = document.getElementById("tam");
    let sabor = document.getElementById("sabores");
    let comentario = document.getElementById("comentario");

    let expTel = /^\d{9}$/;
    var expLetras = /^[a-zA-Z]{1,10}$/;

    if (nombre.value.length <= 2 || nombre.value.length > 30) {
        var toast = '<span>El nombre tiene que tener más de dos caracteres</span>';
        M.toast({ html: toast, classes: 'rounded' });
        return false;
    }

    if (!expLetras.test(nombre.value)) {
        var toast = '<span>El nombre tiene que ser solo letras</span>';
        M.toast({ html: toast, classes: 'rounded' });
        return false;
    }
    if (!expLetras.test(apellido.value)) {
        var toast = '<span>El apellido tiene que ser solo letras</span>';
        M.toast({ html: toast, classes: 'rounded' });
        return false;
    }

    if (apellido.value.length <= 2 || apellido.value.length > 30) {
        var toast2 = '<span>El apellido tiene que tener más de dos caracteres</span>';
        M.toast({ html: toast2, classes: 'rounded' });
        return false;
    }
    if (telf.value.length < 9 || telf.value.length > 9) {
        var toast3 = '<span>El telefono tiene que tener 9 caracteres</span>';
        M.toast({ html: toast3, classes: 'rounded' });
        return false;
    }

    if (!expTel.test(telf.value)) {
        var toast4 = '<span>Solo caracteres numericos</span>';
        M.toast({ html: toast4, classes: 'rounded' });
        return false;
    }

    if (tam.selectedIndex === 0) {
        var toast5 = '<span>Debes seleccionar al menos una opción de tamaño</span>';
        M.toast({ html: toast5, classes: 'rounded' });
        return false;
    }
    if (sabor.selectedIndex === 0) {
        var toast6 = '<span>Debes seleccionar al menos un sabor</span>';
        M.toast({ html: toast6, classes: 'rounded' });
        return false;
    }

    if (comentario.value.length > 120) {
        var toast5 = '<span>Máximo 120 caracteres en el comentario</span>';
        M.toast({ html: toast5, classes: 'rounded' });
        return false;
    }

    return true;
}