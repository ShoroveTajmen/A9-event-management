1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined

Answer: [B] -> The answer is 'B'. Because at first we declared a variable 'greeting', and then we assigned an object in the variable 'greetign'. We know that, js is case sensitive so that here 'greetign' is treated as a different variable which is not defined. Hence the ans is ReferenceError.

2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

    A: NaN
    B: TypeError
    C: "12"
    D: 3

Answer: [C] -> In js we know that, when '+' opeartor used between a number and a string then this operation will not be performing as a summation. It will be performing as a concatenations. So the ans is "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

    A: ['🍕', '🍫', '🥑', '🍔']
    B: ['🍝', '🍫', '🥑', '🍔']
    C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    D: ReferenceError

Answer: [A] -> In above code, firstly info object has one property 'favoriteFood' which assigned to the first element of 'food' array "🍕" and then reassigned 'favoriteFood' to the "🍝". Here object property reassignment will not affect to the 'food' array so when we log the 'food' array it will show  ['🍕', '🍫', '🥑', '🍔'].


4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

    A: Hi there,
    B: Hi there, undefined
    C: Hi there, null
    D: ReferenceError

Answer: [B]-> In this above, 'sayHi' function has a parameter 'name'. But we call the function without a parameter. So 'sayHi' function will received nothing and inside the function 'name' become undefined. Hence function returns' Hi there, undefined'.


5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

    A: 1
    B: 2
    C: 3
    D: 4

Answer: [c] -> Initially const = 0. 'forEach' method will iterate each element of nums array. So that, firstly check 0 number index of nums array and get the value which is '0' considered as a falsy value that's why count will not be incremented by 1. But rest of the elemets are truthy value of nums array and count will be incremented. Hence the ans is 3.