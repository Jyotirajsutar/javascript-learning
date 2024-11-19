
console.log("========Using arrow Function, with no args and no return value========");
let message = () => {
    console.log("Good Morning, Today is Tuesday");
}
message();

console.log("========Using arrow Function, with args and no return value========");
let multiply = (n1, n2, n3) => {
    console.log(`Multiplication of ${n1},${n2} and ${n3} is: ${n1 * n2 * n3}`);
}
multiply(5, 5, 2);
multiply(10, 4, 1);

console.log("========Using arrow Function, with args and return value========");
let add = (n1, n2, n3, n4, n5) => {
    let result = n1 + n2 + n3 + n4 + n5;
    return result;
}
let addition = add(100, 100, 200, 349, 756);
console.log(`Addition of given no. is : ${addition}`);
let concat = add("I am", " learning", " ES6", " features", " in depth" );
console.log(concat);
