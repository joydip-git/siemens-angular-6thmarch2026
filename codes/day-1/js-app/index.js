var x = 10
var nameValue = 'joydip'
var isManager = true
var y = 12.34
console.log(x, typeof x);
console.log(nameValue, typeof nameValue);
console.log(isManager, typeof isManager);
console.log(y, typeof y);
var anilObj = {
    //value properties
    id: 1,
    name: 'anil',
    salary: 1000,

    //functional property
    print: function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

console.log(anilObj.name);
console.log(anilObj['salary']);

console.log(anilObj.print());
console.log(anilObj['print']());

//declaration
function add(x, y) {
    return x + y
}
console.log(add(10, 20));

//expression
var subtract = function (x, y) {
    return x - y;
}

//constructor function
function person(idValue, nameValue, salaryValue) {
    var x = 100
    this.id = idValue
    this.name = nameValue
    this.salary = salaryValue
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

var joydipRef = new person(100, 'joydip', 1000);
joydipRef.location = "Bangalore"
console.log(joydipRef);
console.log(person.prototype);
console.log(person.prototype === joydipRef.__proto__);

var muskanRef = new person(100, 'joydip', 1000);

console.log(joydipRef.__proto__ === muskanRef.__proto__);
console.log(Object.prototype);
Object.prototype.sayHello = function () {
    return "hello....."
}
console.log(joydipRef.sayHello());
console.log(muskanRef.sayHello());
console.log(person.prototype.__proto__);

function trainer(idValue, nameValue, salaryValue, subjectValue) {
    //person() 
    person.call(this, idValue, nameValue, salaryValue);
    this.subject = subjectValue;
    this.print = function () {
        return `${this.id}, ${this.name}, ${this.salary}, ${this.subject}`
    }
}

var sunilTrainer = new trainer(200, 'sunil', 3000, '.NET');
console.log(sunilTrainer.print());