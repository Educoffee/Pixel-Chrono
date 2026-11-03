let btnIniciar = document.getElementById('iniciar');
let btnParar = document.getElementById('parar');
let btnResetar = document.getElementById('resetar');

let btncronometro = document.getElementById('cronometro')
let segundos = 0;
let minutos = 0;
let horas = 0;
let timer;
// sempre deixar o numero 0 na frente (05:00:00) para não ficar(1:00:2)
function zeroFrente(numero) {
    if (numero < 10){
        return "0" + numero;
        } else {
        return numero;
    }
}

//função para o cronometro rodar
function start() {
    segundos++;

    if (segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos == 60) {
        minutos = 0;
        horas++;
    }

    //trasforma o texto em numero
    btncronometro.innerHTML = `${zeroFrente(horas)}:${zeroFrente(minutos)}:${zeroFrente(segundos)}`;
}

function iniciar() {
    clearInterval(timer); // Evita que crie múltiplos timers se clicar várias vezes
    timer = setInterval(start, 1000); // Roda a função 'start' a cada 1 segundo (1000ms)
}

// Função para parar/pausar o cronômetro
function parar() {
    clearInterval(timer);
}

// Função para resetar o cronômetro
function resetar() {
    clearInterval(timer);
    segundos = 0;
    minutos = 0;
    horas = 0;
    btncronometro.innerHTML = "00:00:00";
}

// Vinculando as funções aos botões (através dos cliques)
btnIniciar.addEventListener('click', iniciar);
btnParar.addEventListener('click', parar);
btnResetar.addEventListener('click', resetar);

