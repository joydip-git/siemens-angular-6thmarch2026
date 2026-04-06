import { Person } from "./person"

export class Trainer extends Person {
    constructor(id: number, name: string, salary: number, public subject: string) {
        super(id, name, salary)
        // this.subject = subject
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}