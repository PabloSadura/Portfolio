document.addEventListener("DOMContentLoaded", function () {
  var text = ` Soy desarrollador Fullstack, un apasionado 
  por el desarrollo y la programación. 
  Estoy en constante aprendizaje. Amplio 
  manejo de grupos y equipos de trabajo 
  multidiciplinarios.`;

  var textElement = document.getElementById("typewriter-text");
  var index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, Math.random() * 10 + 50); // Ajusta el intervalo de velocidad de la máquina de escribir
    }
  }

  typeWriter();
});
