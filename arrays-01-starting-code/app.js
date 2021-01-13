// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(moreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// // convert an iterable or array-like object into an array
// const arryaListItems = Array.from(listItems);
// console.log(arryaListItems);

// const hobbies = ['Cooking', 'Sport'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// // add at the end
// hobbies.push('Reading');
// // add at the beginning
// hobbies.unshift('Coding');
// // remove at end
// hobbies.pop();
// // remove at beginning
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removeElements = hobbies.splice(-1, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(testResults, storedResults);
// // for primitive types
// console.log(testResults.indexOf(1.5));

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// // for reference types
// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// console.log(manuel);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);
// })

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// // const filteredPrices = prices.filter((price, idx, prices) => {
// //     return price > 6;
// // });

// const filteredPrices = prices.filter((p) => p > 6);

// console.log(filteredPrices);

// // let sum = 0;

// // prices.forEach(price => sum += price)
// // console.log(sum);

// // const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
// //     return prevValue + curValue;
// // }, 0);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragment = [...nameFragments];
// nameFragments.unshift('Mr');
// console.log(nameFragments, copiedNameFragment);

// console.log(Math.min(...prices));

// const person = [
//   { name: 'Max', age: 30 },
//   { name: 'Manuel', age: 31 },
// ];
// const copiedPerson = [...person];

// person.push({name: 'Anna', age: 29});

// console.log(person, copiedPerson);

const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);