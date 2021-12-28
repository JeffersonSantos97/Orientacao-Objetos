// The object is not immutable, he can win properties and methods along the code 


let people = {
    name: "Jefferson",
    
}
people.age = 29;

people.speak = function (){
    console.log("Hello")
}

console.log(people.speak)

