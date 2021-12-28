// Os métodos podem realizar qualquer operação que uma função realizar 

// creat an object with name and age 
// creat an function that says the your name  
// creat an function birthday
// return in console your age current 
// creat an function asking if can drive 
// return in console if can drive or not

//Creat an object calculator
//Creat an function somar 
// creat an function for subtract 


/* Exemple initial 

let people = {
    name: "Jeff",
    getName: function(){
        console.log("My name is ", this.name)
    },
    setNome: function(newName){
        this.name = newNome;
    }
}

pessoa.getName(); // My name is Jeff
pessoa.setName('julia'); 
pessoa.getName(); // My name is julia
*/ 
let user = {
    name: "Jeff",
    age : 24,
    speak() {
        console.log("Hey, my name is", this.name);
    },
    birthday() {
        this.age += 1;
    },
    canDrive() {
        if(this.age >=18){
            console.log("You can drive")
        }
        else{
            console.log("You don´t can drive still")
        }
    }
}
user.speak();
user.birthday(); // The ago was 24, but how I called the function birthday, the next user.name will be 25 
console.log("My age current is", user.age); // My age current is 25
user.birthday();
console.log("My age current is ",user.age); // My age current is 26 
user.canDrive();




let calculator = {
    number: 0,
    sum: function(a,b){
        this.number = a + b;

    }
}
calculator.sum(4,2);
console.log(calculator.number);



