//Selecciono las variables necesarias
var pasados = [];
var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
    url: "http://127.0.0.1:5500/info.json"
    }).done(function (resultado) {

        //Guarda el resultado en variables
        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        /*'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        INDEX PROXIMOS
        ................................................................................*/

        //Selecciona los eventos que sean anteriores a la fecha actual del JSON
        for (var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha > hoy) {
                proximos.push(eventos[i]);
            }
        }

        //Ordena los eventos segun la fecha (los mas recientes primero)
        proximos = proximos.sort(function (x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;

        });
        // TOMA SOLO LOS 2 PRIMEROS ELEMENTOS
        proximos = proximos.slice(0, 2)

        //Crea un string que contenga el HTML que describe el detalle del evento
        var htmlProximos= ""

        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < proximos.length; j++) {
            htmlProximos += `
              <article class="JSONIndex">
              <p class= "id">${proximos[j].id}</p>
              <h2><a href="detalle.html?id=`+proximos[j].id+`">${proximos[j].nombre}</a></h2>
              <p class="JSONHorario">${proximos[j].fecha} - 
              ${proximos[j].lugar}</p>
              <p class="JSONDescripcion">${proximos[j].descripcion}</p>
              </article>
              `
       
        }
        
        //Modifica el DOM agregando el html generado
        document.getElementById("indexproximos").innerHTML = htmlProximos

        /*'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        INDEX PROXIMOS
        ................................................................................*/

        //Selecciona los eventos que sean posteriores a la fecha actual del JSON
        for(var i = 0; i < eventos.length; i++) {
            if (eventos[i].fecha < hoy) {
                pasados.push(eventos[i]);
            }    
        }
    
        //Ordena los eventos segun la fecha (los mas recientes primero)
        pasados = pasados.sort(function (x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });

        //TOMA SOLO 2 PRIMEROS ELEMENTOS
        pasados = pasados.slice(0, 2)

        //Crea un string que contenga el HTML que describe el detalle del evento
        var htmlPasados = "" 
        
        //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < pasados.length; j++) {
        htmlPasados += ` 
              <article class="JSONIndex">
              <p class= "id">${pasados[j].id}</p>
              <h2><a href="detalle.html?id=`+ pasados[j].id + `">${pasados[j].nombre}</a></h2>
              <p class="JSONHorario">${pasados[j].fecha} - 
              ${pasados[j].lugar}</p>
              <p class="JSONDescripcion">${pasados[j].descripcion}</p>
              </article>
              `
        }
        //Modifica el DOM agregando el html generado
        document.getElementById("indexpasados").innerHTML = htmlPasados
    })
});