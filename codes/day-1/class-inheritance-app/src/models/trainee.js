class Trainee extends Person {
    constructor(id, name, salary, department) {
        super(id, name, salary)
        this.department = department
    }
    print() {
        return `${super.print()}, ${this.department}`
    }
}