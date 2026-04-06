import { Person } from "./person";
export class Trainee extends Person {
    //department: string;
    constructor(id: number, name: string, salary: number, public department: string) {
        super(id, name, salary)
        //this.department = department
    }
    print() {
        return `${super.print()}, ${this.department}`
    }
}