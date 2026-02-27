var numbers = [1,2,3,4,5];
if (Array.isArray(numbers)) {
    console.log(Array.isArray(numbers));
   // perform array tasks on numbers
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
    console.log(doubled);
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]
    console.log(evens);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
    console.log(sum);
}
