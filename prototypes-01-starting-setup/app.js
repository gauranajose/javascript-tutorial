class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson{
    name = 'Max';

    constructor() {
        super();
        this.age = 30;
    }

    greet() {
        console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
    }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(`Hi I am ${this.name} and I am ${this.age} years old.`);
//   };
// }

// console.dir(Person);

// __proto__ is present in every object.
// prototype only exist in functions.

// prototype can be used to assign an object as a prototype

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// const p1 = new Person();
// p1.greet();
// p1.printAge();
// console.log(p1.__proto__);

// console.log(p1.__proto__ === Person.prototype);

// const p2 = new p1.__proto__.constructor();

// const p = new Person();
// const p2 = new Person();
// console.log(p.prototype === p2.prototype);

const course = { // new Object() 
    title: 'JavaScript the Complete Guide',
    rating: 5
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
    // ...Object.getPrototypeOf(course),
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({
    printProgress: function() {
        console.log(this.ptogress);
    }
}, {
    name: {
        configurable: true,
        enumerable: true,
        value: 'Max',
        writable: false
    }
});

console.log(student);

// student.name = 'Max';

// Object.defineProperty(student, 'progress', {
//     configurable: true,
//     enumerable: true,
//     value: 0.8,
//     writable: false
// });

course.printRating();