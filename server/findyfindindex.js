const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];


const rta = products.find(ele => ele.price === 23);
console.log('rta: ', rta);
const rta2 = products.findIndex(ele => ele.price === 23);
console.log('rta2: ', rta2);