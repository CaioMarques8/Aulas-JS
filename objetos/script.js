// let carro = {
//     tech:{
//         nome:'Sean',
//         cnh:'AB',
//         especialidade:'Drift',
//         'modelo do carro': 'Evolution',
//         cor: 'Vermelho'
//     },
//     corredor:{
//         nome:'Toretto',
//         cnh:'AB',
//         especialidade:'Speed',
//         'modelo do carro': 'Dodge Charge',
//         cor: 'Preto'
//     },
//     Atirador:{
//         nome:'Roman',
//         cnh:'AB',
//         especialidade:'Destruction',
//         'modelo do carro': 'Eclipse',
//         cor: 'Roxo'
//     },
// };


// modificando valores das propriedades
// function trocarCarro(obj){
//     obj['modelo do carro'] = 'Subaro';
// }

// let piloto = (obj) => {
//     obj.motorista.nome = 'Toretto';
// }



// cria uma nova propriedade para o objeto
// carro.marca = 'wvm';
// cria um metodo para o objeto
// carro.dirigindo = ()=>{console.log('Veiculo em movimento....')};
// deleta uma propriedade do objeto
// delete carro.cor;

//======================================

// console.log(carro['Passando de marcha'][2]);
// console.log(carro.motorista.nome +' / '+ carro.motorista.cnh);
// carro.nitro();

// modificando valores das propriedades
// trocarCarro(carro);
// piloto(carro);


// laço para percorrer objetos
// for (let modelo in carro) {
//     console.log(`${carro[modelo].nome} : ${modelo}`);
// }


// // mostra as chaves/propriedades do objeto
// let chavesCarro = Object.keys(carro);
// // mostra os valores do objeto
// let valoresCarro = Object.values(carro);
// // mostra as chaves/propriedades e valores do objeto
// let chaveValores = Object.entries(carro);
// // insere novas chaves/propriedades e valores no objeto
// let novasChavesValores = Object.assign({pneu:'novo', motor:'V8'},carro);

// console.log(chavesCarro);
// console.log(valoresCarro);
// console.log(chaveValores);
// console.log(novasChavesValores);

let Tsunny = {
    tripulacao:{
        capitao:{ nome:'Luffy',
                statu :'ativo'    
        },
        imediato:{ nome:'Zoro',
                statu :'ativo'
        },
        navegadora:{ nome:'Nami',
                statu :'ativo'
        },
        atirador:{ nome:'Usopp',
                statu :'ativo'
        },
        cozinheiro:{ nome:'Sanji',
                statu :'ativo'
        },
        medico:{ nome:'Chopper',
                statu :'ativo'
        },
        arqueologa:{ nome:'NicoRobin',
                statu :'ativo'
        }
    }
};

for (let membro in Tsunny.tripulacao) {
    // console.log(`${membro} : ${Tsunny.tripulacao[membro].nome}`);
    Tsunny.tripulacao[membro].recompensa = '0'; 
    delete Tsunny.tripulacao[membro].statu;
};



console.log(Tsunny);

