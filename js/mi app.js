var fecha = new Date();
        var mensaje = new String();
        var horas = fecha.getHours();
        
        if(horas >= 00 && horas < 12){
            mensaje = "Buenos días";
        } else if(horas >= 12 && horas < 18){
            mensaje = "Buenas tardes";
        } else if(horas >= 18 && horas <= 23){
            mensaje = "Buenas noches";
        }

        alert(mensaje+". Ingresa los datos solicitados");
        var nombre = "";
        var edad = 0;
        var localidad = "";
        var profesion = "";

        nombre = prompt("¿Cuál es tu nombre?");
        edad = prompt("¿Cuál es tu edad?");
        localidad = prompt("¿Cuál es tu localidad?");
        profesion = prompt("¿Cuál es tu profesión?");

        var respuesta = confirm("¿Los datos son correctos?" +
            "\nNombre: " + nombre +
            "\nEdad: " + edad +
            "\nLocalidad: " + localidad +
            "\nProfesion: " + profesion);
        if (respuesta) {
            document.writeln("<center>");
            document.writeln("<table border = '1'>");
            //Renglón 1
            document.writeln("<tr>");
            //Col 1
            document.writeln("<td rowspan='4' width = '25%'>Foto");
            document.writeln("</td>")
            //Col 2
            document.writeln("<td>");
            document.writeln("<b >Nombre: </b> <span id='nombre' > "+nombre+"</span>");
            document.writeln("</td>")
            document.writeln("</tr>");
            //Renglón 2
            document.writeln("<tr>");
            document.writeln("<td>");
            document.writeln("<b>Edad: </b>"+edad+" años");
            document.writeln("</td>")
            document.writeln("</tr>");
            //Renglón 3
            document.writeln("<tr>");
            document.writeln("<td>");
            document.writeln("<b>Localidad: </b>"+localidad);
            document.writeln("</td>")
            document.writeln("</tr>");
            //Renglón 4
            document.writeln("<tr>");
            document.writeln("<td>");
            document.writeln("<b>Profesión: </b>"+profesion);
            document.writeln("</td>")
            document.writeln("</tr>");
            document.writeln("</table>")
            document.writeln("</center>");


          var btn = document.createElement("button");
          btn.textContent = "Cambiar nombre";
          btn.setAttribute("type","button");
          btn.setAttribute("class","btn btn-success");
          btn.setAttribute("onnclick","cambiarNombre()");

          
          var br = document.createElement("br");
        

          

          var ctrlNombre = document.createElement("input");
          ctrlNombre.setAttribute("type","text");
          ctrlNombre.setAttribute("id","ctrl-nombre");

          document.body.appendChild(ctrlNombre);
          document.body.appendChild(br);
          document.body.appendChild(btn);

        } else {
            alert("Gracias por visitarnos. Vuelve pronto.");
         
        }
        function cambiarNombre(){
            var ctNombre = document.getElementById("ctrl-nombre");
            var nombre = document.getElementById("nombre");
            nombre.innerHTML = ctNombre.Value;

        }