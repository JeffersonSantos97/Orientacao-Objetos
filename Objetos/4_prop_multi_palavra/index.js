
// Quando a propriedade tiver mais que uma palavra tem que colocar entre "Aspas"
// Não é muito indicado que faça isso 
// Programadores mais iniciantes que fazem isso 
// Se eu quiser chamar, vai ter que ser pelo array 

let cavalo = {
    patas: 4,
    "está domesticado" : false, // Sem as aspas vai dar erro 
    estaDomesticado: false // Jeito recomendado de chamar um objeto com mais de uma palavra  
}
console.log(cavalo);
console.log(cavalo["está domesticado"])
console.log(cavalo.estaDomesticado);

