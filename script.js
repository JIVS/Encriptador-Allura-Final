function encrypt() {   //funcion de encriptar
    //obtener el texto del usuario
    var inputText = document.getElementById("inputText").value;
  
    //verifica si el texto ingresado esta vacio
    if (inputText === "") {
      location.reload(); //recarga si no hay texto
    } else if (
      inputText.match(/[A-Z]/) ||
      inputText.match(/[áéíóú]/) ||
      inputText.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    ) {
      //verificar por mayusculas, acentos o caracteres no permitidos
      document.getElementById("outputPanelError").style.visibility = "visible"; // Mostrar el panel de error
    } else {
      // comenzar encriptacion del texto
      var encryptedText = "";
      for (var i = 0; i < inputText.length; i++) {
        var character = inputText[i];
        if (character === "a") {
          character = "ai";
        } else if (character === "e") {
          character = "enter";
        } else if (character === "i") {
          character = "imes";
        } else if (character === "o") {
          character = "ober";
        } else if (character === "u") {
          character = "ufat";
        }
        encryptedText += character;
      }
  
      //mostrar resultado
      document.getElementById("noTextPanel").style.visibility = "hidden"; // Ocultar el panel de texto no encontrado
      document.getElementById("outputPanelError").style.visibility = "hidden"; // Ocultar el panel de error
      document.getElementById("outputPanelOk").style.visibility = "visible"; // Mostrar el panel de salida correcta
      document.getElementById("outputText").value = encryptedText; // Establecer el texto encriptado en el área de salida
    }
  }
  
  function decrypt() {  //funcion de desencriptado
    // Obtener el texto ingresado por el usuario
    var inputText = document.getElementById("inputText").value;
  
    
    if (inputText === "") { //verificar si hay texto
      location.reload(); // Recargar la página si el texto está vacío
    } else if (
      inputText.match(/[A-Z]/) ||
      inputText.match(/[áéíóú]/) ||
      inputText.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    ) {
      //verificar por mayusculas, acentos o caracteres no permitidos
      document.getElementById("outputPanelError").style.visibility = "visible"; //mostrar panel de error
    } else {
      //desencriptar texto
      var decryptedText = inputText
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
  
      //mostrar resultado de desencriptacion
      document.getElementById("noTextPanel").style.visibility = "hidden"; // Ocultar el panel de texto no encontrado
      document.getElementById("outputPanelError").style.visibility = "hidden"; // Ocultar el panel de error
      document.getElementById("outputPanelOk").style.visibility = "visible"; // Mostrar el panel de salida correcta
      document.getElementById("outputText").value = decryptedText; // Establecer el texto desencriptado en el área de salida
    }
  }
  
  //copiar texto de salida al portapapeles
  function copy() {
    var outputText = document.getElementById("outputText").value;
  
    navigator.clipboard
      .writeText(outputText)
      .then(() => {
        console.log("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar al portapapeles:", err);
      });
  }