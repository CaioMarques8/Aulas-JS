/*

//Buscador de imagem

// pegando ids e nome da tag para maniular
let campoTexto = document.querySelector('#nome');
let img = document.querySelector('img');
let btn = document.querySelector('#button');

// evento de click para buscar imagem
btn.addEventListener('click',enviaRequisicao);

// função para enviar a requisição 
function enviaRequisicao(){
  let url;//url da api
  let chave_api; //chave da api
  chave_api = "563492ad6f9170000100000182cfa5251b204eb7954b4d9fd8c1a8f8";
  url = "https://api.pexels.com/v1/search?query=" + campoTexto.value;//url da api mais a nome a ser buscado
  console.log(url);

  // requisição da api 
  let requisicao = new XMLHttpRequest();
  requisicao.onload = manipulaResposta;
  requisicao.open('GET', url);
  requisicao.setRequestHeader('Authorization',chave_api);
  requisicao.send();
  // função que converte o JSON para js  
  function manipulaResposta(){
    let response = JSON.parse(requisicao.responseText);
    console.log(response);
    img.src = response.photos[0].src.large2x;
  }

}
 **/
//Promises
/*
var promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('terminou!'), 2000);
});
promessa
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log('deu erro!')); 
**/

//================================================= 
// api fetch
// 
// fetch('http://imd.ufrn.br/api/dados.json').then(function (response) {
//     response.json().then(data => console.log(data));
// }).catch(function (err){
//     console.log('Erro na requisição', err);
// });


