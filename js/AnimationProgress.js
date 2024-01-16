// $(function() {
//     var parrafos = document.querySelectorAll('.percentage');
//     var animaciones = [];

//     function animatePercentage(parrafo, objetivo) {
//         var porcentaje = 0;
//         var interval;

//         function actualizarPorcentaje() {
//             parrafo.textContent = '+' + porcentaje + '%';

//             if (porcentaje >= objetivo) {
//                 clearInterval(interval);
//             } else {
//                 porcentaje++;
//             }
//         }

//         interval = setInterval(actualizarPorcentaje, 25);

//         return function resetearAnimacion() {
//             clearInterval(interval);
//             porcentaje = 0;
//             interval = setInterval(actualizarPorcentaje, 25);
//         };
//     }

//     function reiniciarTodasLasAnimaciones() {
//         animaciones.forEach(function (resetAnimacion) {
//             resetAnimacion();
//         });
//     }

//     $(".Containerlitics").sortable({
//         axis: "x",
//         containment: ".Containerlitics",
//         tolerance: "pointer",
//         stop: function(event, ui) {
//             // Obtener y almacenar la posición después de ordenar
//             var containerOrder = $(".Containerlitics").sortable("toArray");
//             localStorage.setItem("containerOrder", JSON.stringify(containerOrder));

//             // Reiniciar animaciones
//             reiniciarTodasLasAnimaciones();
//         }
//     });

//     // Restaurar el orden almacenado al cargar la página
//     var storedOrder = localStorage.getItem("containerOrder");
//     if (storedOrder) {
//         $(".Containerlitics").sortable("toArray", JSON.parse(storedOrder));
//     }

//     for (var i = 0; i < parrafos.length; i++) {
//         var resetAnimacion = animatePercentage(parrafos[i], obtenerObjetivoPorIndice(i));
//         animaciones.push(resetAnimacion);
//     }

//     setTimeout(function () {
//         reiniciarTodasLasAnimaciones();
//     }, 90);
// });

// function obtenerObjetivoPorIndice(indice) {
//     switch (indice) {
//         case 0:
//             return 48;
//         case 1:
//             return 80;
//         case 2:
//             return 65;
//         default:
//             return 0;
//     }
// }
$(function() {
    var parrafos = document.querySelectorAll('.percentage');
    var animaciones = [];

    function animatePercentage(parrafo, objetivo) {
        var porcentaje = 0;
        var interval;

        function actualizarPorcentaje() {
            parrafo.textContent = '+' + porcentaje + '%';

            if (porcentaje >= objetivo) {
                clearInterval(interval);
            } else {
                porcentaje++;
            }
        }

        interval = setInterval(actualizarPorcentaje, 25);

        return function resetearAnimacion() {
            clearInterval(interval);
            porcentaje = 0;
            interval = setInterval(actualizarPorcentaje, 25);
        };
    }

    function reiniciarTodasLasAnimaciones() {
        animaciones.forEach(function (resetAnimacion) {
            resetAnimacion();
        });
    }

    // Restaurar el orden almacenado al cargar la página
    var storedOrder = localStorage.getItem("containerOrder");
    if (storedOrder) {
        // Si necesitas hacer algo con el orden almacenado, puedes hacerlo aquí.
        // Por ejemplo, puedes usar JSON.parse(storedOrder) para obtener el array del orden.
    }

    for (var i = 0; i < parrafos.length; i++) {
        var resetAnimacion = animatePercentage(parrafos[i], obtenerObjetivoPorIndice(i));
        animaciones.push(resetAnimacion);
    }

    setTimeout(function () {
        reiniciarTodasLasAnimaciones();
    }, 90);
});

function obtenerObjetivoPorIndice(indice) {
    switch (indice) {
        case 0:
            return 48;
        case 1:
            return 80;
        case 2:
            return 65;
        default:
            return 0;
    }
}
