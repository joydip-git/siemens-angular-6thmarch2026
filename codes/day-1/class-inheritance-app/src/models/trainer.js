import { Person } from "./person"

export class Trainer extends Person{
    constructor(id, name, salary, subject) {
        super(id, name, salary)
        this.subject = subject
    }
    print() {
        return `${ super.print()}, ${this.subject}`
    }
}