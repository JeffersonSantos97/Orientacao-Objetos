// Os métodos podem realizar qualquer operação que uma função realizar 

/* let pessoa = {
    nome: "Jeff",
    getNome: function(){
        console.log("O nome é ", this.nome)
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    }
}

pessoa.getNome(); // o nome é Jeff
pessoa.setNome('julia'); 
pessoa.getNome(); // Meu nome é julia
*/ 
let usuario = {
    nome: "Fernando",
    idade: 29,
    aniversario(){
        this.idade += 1 
    }
}
usuario.aniversario();
console.log(usuario.idade);
usuario.aniversario();
console.log(usuario.idade);



