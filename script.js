// Definindo o tempo para o contador (em milissegundos)
let countdownDate = new Date("Apr 19, 2025 18:00:00").getTime();

// Atualizando o contador a cada 1 segundo
let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "É hora do nosso Pula Pula!";
  }
}, 1000);