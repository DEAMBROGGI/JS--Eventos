// Hemos omitido los acentos en los comentarios por compatibilidad



//Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

//Carga los datos que estan en el JSON (info.json) usando AJAX

//Guarda el resultado en una variable

//Busca el elemento en el arreglo

//Crea un string que contenga el HTML que describe el detalle del evento

//Modifica el DOM agregando el html generado dentro del div con id=evento
$(document).ready(function() {

    //cargando los datos
    $.ajax({
        url: "http://127.0.0.1:5500/info.json"

    }).done(function(resultado) {

        //llenando la variable
        eventos = resultado.eventos;

        //obteniendo el id del url
        var id = location.search.match(/id=(\d)*/)[1]

        evento = eventos.find(function(element) {
                return element.id == id
            })
            //llenando dinamicamente los eventos
        var html = `
                <article>
                <h2>${evento.nombre}</h2>
                <p class="JSONHorario">${evento.fecha} - 
                ${evento.lugar}</p
                <p class="JSONDescripcion">Descripción: ${evento.descripcion}</p>
                <p class="JSONPrecio">Costo: ${evento.precio}</p>
                <p class="JSONInvitados">Invitados: ${evento.invitados}</p>
                </article>
                `

        document.getElementById("evento").innerHTML = html
    });

});