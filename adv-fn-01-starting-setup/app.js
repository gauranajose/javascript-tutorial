// Pure function
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// Impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // side effect
  return sum;
}

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('New Hobby');
  console.log(h);
}

printHobbies(hobbies);

// Factory Functions
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncometaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncometaxAmount(100));

let userName = 'Max';

function greetUser() {
  let name = userName;
  console.log('Hi ' + name);
}

userName = 'Manuel';

greetUser();

//Recursion
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'harry',
            },
            {
              name: 'Amelia',
            },
          ],
        },
      ],
    },
    {
      name: 'Julia',
    },
  ],
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));
