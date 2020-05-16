const person = {
	name: "Kurt Anthony",
	age: 24,
	sons: ["Laura","Jose","Marcos","Flor","Cami"]
}
// console.log(person.name);
// console.log(person.age);
for(const son in person){ //imprime los nombres de las propiedades pero no el contenido
	console.log(son);
}
for(const son in person){
	console.log(person[son]);
}
for(const son of person.sons){//imprime el contenido del array, que a la vez, es una propiedad de un objeto.
	console.log(son);
}
console.log(`Hola soy ${person.name} tengo ${person.age} y mis hijos son ${person.sons.join(", ")}.`);