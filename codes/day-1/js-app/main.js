class Person {
    constructor(idValue, nameValue, salaryValue) {
        this.id = idValue
        this.name = nameValue
        this.salary = salaryValue
    }

    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

class Trainer extends Person {
    constructor(idValue, nameValue, salaryValue, subjectValue) {
        super(idValue, nameValue, salaryValue)
        this.subject = subjectValue
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}

console.log(Person.prototype);
console.log(Trainer.prototype);

var anilObj = new Trainer(100, 'anil', 1000, 'JS')
//console.log(anilObj);
anilObj.location = "bangalore"
console.log(anilObj);