// Selecciono las variables necesarias
var pasados = [];
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
            if (eventos[i].fecha < hoy) {
                 pasados.push(eventos[i]);
            }
        }
           
        //Ordena los eventos segun la fecha (los mas recientes primero)
        pasados = pasados.sort(function(x, y) {
            if (x.fecha < y.fecha) {
                return 1;
            }
            return -1;
        });
            
        //Crea un string que contenga el HTML que describe el detalle del evento
        var html = "" //Recorre el arreglo y concatena el HTML para cada evento
        for (var j = 0; j < pasados.length; j++) {
            html += ` 
              <article>
              <p class= "id">${pasados[j].id}</p>
              <h2><a href="detalle.html?id=`+ pasados[j].id + `">${pasados[j].nombre}</a></h2>
              <p class="JSONHorario">${pasados[j].fecha} - 
              ${pasados[j].lugar}</p>
              <p class="JSONDescripcion">${pasados[j].descripcion}</p>
              <p class="JSONInvitados">Invitados: ${pasados[j].invitados}</p>
              </article>
              `
        }
            
        //Modifica el DOM agregando el html generado
        document.getElementById("pasados").innerHTML = html
    })
    

});