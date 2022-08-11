let cadastro1 = {
    nome:'Artur',
    idade:18,
    cidade:"rj"
}

cadastro1.signo = "Aquário";
delete cadastro1.idade;
console.log(cadastro1)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.


let cadastro2 = [{
    nome:'Artur',
    idade:18,
    telefone:90028922,
    amigos: ['dan','dara']
},

{
    nome:'aryadne',
    idade:21,
    telefone:5565975,
    amigos:['mari','luan']
},
 {
    nome:'joy',
    idade: 19,
    telefone:94997165,
    amigos:['léo','joão']
},
]
cadastro2[0].amigos = ['dan','dara'];
cadastro2[1].amigos = ['mari','luan'];
cadastro2[2].amigos = ['léo', 'joão'];

console.log(cadastro2);