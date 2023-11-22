function getTimeFromSeconds(segundos){
    const data = new Date(segundos*1000);//transformei os milésimos em segundos de fato
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}

function startClock(){
     timer = setInterval(function(){ //a cada 1 segundo, a var segundos será incrementada
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos); //a função já é dada no formato "00:00:00"
    }, 1000)
}
let segundos = 0;
let timer;
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.end');
const zerar = document.querySelector('.clear');

iniciar.addEventListener('click',function(e){
    clearInterval(timer);
    startClock();
    relogio.classList.remove('pausado');
});
pausar.addEventListener('click',function(e){
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click',function(e){
    clearInterval(timer);
    relogio.innerHTML = getTimeFromSeconds(0);
    segundos = 0;   
});