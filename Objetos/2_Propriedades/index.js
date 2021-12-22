let carro = {
    nome: "uno",
    porta: 4,
    cor: "preto",
    ano: 2011,
}
// 1° forma de chamar uma propriedade 
console.log( " primeira forma ", carro.porta) // Primeira forma: 4 

// Usando propriedades do obj com if 

if(carro.porta > 2 ){
    console.log("Esse carro tem mais que duas portas ");
}

console.log("segunda forma ", carro["cor"]);
let nomeCarro = carro["nome"];
console.log("Numero de letras do nome", nomeCarro, ": ", nomeCarro.length);
// 2° forma de chamar uma propriedade 
// é igual chamar as propriedades dentro de um arrey 
    


