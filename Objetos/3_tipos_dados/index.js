let maquina = {
    material:  "Aço inox",
    equipamento: ['motor', 'freio', 'esteira','cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1,
};
//console.log(maquina) // Chama o objeto todo 

//console.log(maquina.material) // Aço inox 
//console.log(maquina.equipamento[2]); // esteira 

//Objeto com for 

for(num of maquina.equipamento){
console.log(num)
++maquina.equipamento
}
//Objeto com if 
if(maquina.vaiMontada === false ){
     console.log("O comprador precisa montar a máquina ")
 }


