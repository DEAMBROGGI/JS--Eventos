//Selecciono las variables necesarias
var proximos = [];
var hoy;
var eventos;

$(document).ready(function() {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
        url: "http://127.0.0.1:5500/info.json"
    }).done(function(resultado) {

        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        for (var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha > hoy) {
                proximos.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas recientes primero)
        proximos = proximos.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < proximos.length; j++) {
            html += `
              <article>
              <p class= "id">${proximos[j].id}</p>
              <h2><a href="detalle.html?id=`+ proximos[j].id + `">${proximos[j].nombre}</a></h2>
              <p class="JSONHorario">${proximos[j].fecha} - 
              ${proximos[j].lugar}</p>
              <p class="JSONDescripcion">${proximos[j].descripcion}</p>
              <p class="JSONPrecio">Costo: ${proximos[j].precio}</p>
              </article>
              `
        }

        //Modifica el DOM agregando el html generado
        document.getElementById("proximos").innerHTML = html
    })

});