export class Person{
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    print() {
        return `${this.id}, ${this.name}, ${this.salary}`
    }
}

/**
 * module{
 *  exports:{
 *      Person: Person
 *  }
 * }
 */