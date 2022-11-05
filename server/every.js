const numbers = [1,20,39,29,10,13];

const rta = numbers.every(num => num <= 40);

console.log("todos menor o igual a 40: ", rta);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const rta2 = team.every( each => each.age < 15);

console.log("todos son menores de 15 años: ", rta2);