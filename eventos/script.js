// let butao = document.querySelector('#btnB');

// function clicar(){
//     // toggle = liga/desliga a classe
//     butao.classList.toggle('hide');
//     contador++;
// }

// var contador = 0;
// // addEventListener = escutador/monitorador de eventos. Recebe a ação e a função como parametros
// butao.addEventListener('click',clicar);
// butao.addEventListener('click',()=> {console.log(`foi clicado ${contador} vezes`)});


const area = document.body;
const circulo = document.querySelector('.circle');

var comprimentoJanela = window.innerWidth;
var alturaJanela = window.innerHeight;

function coordenadasMouse (e){
    var posicaoHorizontal = comprimentoJanela - e.clientX - 50;
    var posicaoVertical = alturaJanela - e.clientY - 50;

    circulo.style.left = posicaoHorizontal +'px';
    circulo.style.top = posicaoVertical + 'px'; 
}

function mudarCor(){
    circulo.style.backgroundColor = 'green';
    circulo.style.borderColor = 'green';
}


area.addEventListener('mousemove',coordenadasMouse);

circulo.addEventListener('mouseenter',mudarCor);
circulo.addEventListener('mouseleave',function(){
    circulo.removeAttribute('style');
});

