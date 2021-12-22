// Os métodos são ações dos objetos

// Podemos ter métodos de resgatar propriedade do objeto ou modificar o valor delas 

const robo = {
    bracos: 4,
    pernas: 2,
    arma: "metralhadora",
    armaEspecial: "foguete",
    atirar: function(){
        console.log("pew pew pew ")
    }
}
robo.atirar();

const pessoa = {
    nome: "Jeff",
    falar: function(){
        console.log("Olá meu nome é", pessoa.nome );
    }
}
pessoa.falar(); // Olá meu nome é jeff // 

pessoa.falar; // vai retornar só que é um function, pq precisa dos () pra executar a função 

