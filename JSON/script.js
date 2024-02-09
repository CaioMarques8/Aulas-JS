// sintaxe do JSON é similar à sintaxe dos objetos JavaScript.

// {
//   "empresa": "Esquadrão de Super Heróis",
//   "funcionarios": [
//     { "nome": "Peter", "sobrenome": "Parker" },
//     { "nome": "Tony", "sobrenome": "Stark" },
//     { "nome": "Steve", "sobrenome": "Rogers" }
//   ]
// }

// convertendo json para objeto
// var texto = '{ "funcionarios" : [' +
//     '{ "nome":"Peter" , "sobrenome":"Parker" },' +
//     '{ "nome":"Tony" , "sobrenome":"Stark" },' +
//     '{ "nome":"Steve" , "sobrenome":"Rogers" } ]}';

// var objeto = JSON.parse(texto);


// convertendo objeto para json
// var meuObjeto = { "nome": "Gabriel", "idade": 32 };
// var meuJson = JSON.stringify(meuObjeto);

var campoCEP = document.querySelector('#cep');

var campos = ['lagradouro','bairro','localidade','uf'];

function atualizarEnderecoPeloCEP(){
    let cep = campoCEP.value;
    let requestURL = 'https://viacep.com.br/ws/' + cep + '/json';
    let request = new XMLHttpRequest();
    request.open('GET',requestURL);
    request.send();
    request.onload = () => { let resposta = request.response;
    atualizarCamposDoFormulario(resposta);
    } 
};

function atualizarCamposDoFormulario(dadosjson){
    let dados = JSON.parse(dadosjson);
    if(!dados.erro){
        campos.forEach( item => {
            document.getElementById(item).value = dados[item];
        })
    }
}

campoCEP.addEventListener('change',atualizarEnderecoPeloCEP);