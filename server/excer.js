function countWords(array) {
  // Tu código aquí 👈
  console.log('0...', array.length);
  return array.join(" ").split(" ").length;
}

console.log(countWords([
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
]));

console.log(countWords([]));
