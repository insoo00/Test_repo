// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object {key: value};

// 1. Literals and properies
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const insoo = { name: 'insoo', age: 4 };
print(insoo);

insoo.hasJob = true;
console.log(insoo.hasJob);

delete insoo.hasJob;
console.log(insoo.hasJob);

// 2. Computed properies
//  key should be always string
console.log(insoo.name);
console.log(insoo['name']);
insoo['hasJob'] = true;
console.log(insoo.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(insoo, 'name');
printValue(insoo, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 5);

function makePerson(name, age) {
    return {
        name,
        age,
    };
}
console.log(person4);

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

const person5 = new Person('JS', 6);
console.log(person5);

// 5. in operator: property existence check (key on obj)
console.log('name' in insoo);
console.log('age' in insoo);
console.log('random' in insoo);
console.log(insoo.ranndom); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in insoo) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...]);
const user = { name: 'insoo', age: 24 };
const user2 = user;
console.log(user);
user2.name = 'coder';
user2.age = 3;

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);
// console.clear();
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); //(겹칠 경우) 뒤에 오브젝트가 앞에 값 덮어씀
console.log(mixed);
