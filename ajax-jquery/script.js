// O método do jQuery conhecido como load() permite carregar dados de um servidor e incluir o HTML retornado em um elemento selecionado.

// $(document).ready(function () {
//   $("btn").click(function () {
//     $("#filme").load("teste.html");
//   });
// });

// Requisitando dados com $.get()
// $(document).ready(function () {
//   $("button").click(function () {
//     var url = "http://www.imd.ufrn.br/dados.json";

//     $.get(url, function (resposta, status) {
//       $("#filme").text(resposta.Title);
//     });
//   });
// });
// Enviando dados com $.post()
// $(document).ready(function () {
//   var url = "https://httpbin.org/post";
//   var dados = { nome: "Thomas Faraday", cidade: "Londres" };

//   $.post(url, dados, function (resposta, status) {
//     console.log(resposta);
//   });
// });
