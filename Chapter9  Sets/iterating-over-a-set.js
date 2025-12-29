const fruits = new Set(['Apple', 'Banana', 'Orange']);

console.log('Iterating with for...of:');
for (const fruit of fruits) {
  console.log(fruit);
}

console.log('Iterating with forEach:');
fruits.forEach(value => {
  console.log(value);
});
