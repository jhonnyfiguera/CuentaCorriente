//Variable de uso global
var total = 0;
//Valor que se le pasa al div alert
document.getElementById('content').innerHTML = "El balance total es: $" + parseFloat(total).toFixed(2);

function depositar(){
    //Se inicializa la variable monto con el valor obtenido del input
    var monto = document.getElementById("monto").value;
    //Si el monto obtenido es mayor a 0 hará las operaciones necesarias
    if(monto > 0){
        total = parseFloat(total) + parseFloat(monto);
        var tabla = document.getElementById("tabla");
        //Creacion de los elementos tr y td a la tabla
        var nuevaFila = document.createElement("tr");
        var nuevaCelda1 = document.createElement("td");
        //Se le pasa a la celda 1 el valor fecha()
        nuevaCelda1.innerText = fecha();
        var nuevaCelda2 = document.createElement("td");
        //Se le pasa a la celda 2 el valor del monto extraido
        nuevaCelda2.innerText = "$" + parseFloat(monto).toFixed(2);
        var nuevaCelda3 = document.createElement("td");
        //Se le pasa a la celda 3 el valor del balance parcial
        nuevaCelda3.innerText = "$" + parseFloat(total).toFixed(2);
        //Se agregan las filas dentro de la tabla con los valores obtenidos previamente
        nuevaFila.appendChild(nuevaCelda1);
        nuevaFila.appendChild(nuevaCelda2).style.color = "green";
        nuevaFila.appendChild(nuevaCelda3);
        tabla.appendChild(nuevaFila);
        //Rellena el div alert
        document.getElementById('content').innerHTML = "El balance total es: $" + parseFloat(total).toFixed(2);
        //Setea el input y lo deja vacio
        document.getElementById("monto").value = "";
        //Hace focus sobre el input
        document.getElementById("monto").focus();
    }else{
        alert("Debe ingresar un monto positivo mayor a 0");
    }
}

function extraer(){
    var monto = document.getElementById("monto").value;
    
    //Si el balance total es menor a -1000 no dejará hacer mas extracciones
    if((total - monto) >= -1000){
        if(monto > 0){
            total = parseFloat(total) - parseFloat(monto);
            var tabla = document.getElementById("tabla");
            var nuevaFila = document.createElement("tr");
            var nuevaCelda1 = document.createElement("td");
            nuevaCelda1.innerText = fecha();
            var nuevaCelda2 = document.createElement("td");
            nuevaCelda2.innerText = "$-" + parseFloat(monto).toFixed(2);
            var nuevaCelda3 = document.createElement("td");
            nuevaCelda3.innerText = "$" + parseFloat(total).toFixed(2);
            nuevaFila.appendChild(nuevaCelda1);
            nuevaFila.appendChild(nuevaCelda2).style.color = "red";
            nuevaFila.appendChild(nuevaCelda3);
            tabla.appendChild(nuevaFila);
            document.getElementById('content').innerHTML = "El balance total es: $" + parseFloat(total).toFixed(2);
            document.getElementById("monto").value = "";
            document.getElementById("monto").focus();
        }else{
            alert("Debe ingresar un monto positivo mayor a 0");
        }
    }else{
        alert("La cuenta corriente tiene un tope de $-1000.-");
    }
}

function fecha(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth();
    var yyyy = hoy.getFullYear();
 
    return dd+'/'+mm+'/'+yyyy;
}


