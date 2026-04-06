import { Person } from "../models/person";
import { people } from "../repository/people";
import { IServiceContract } from "./service-contract";

export class PeopleService implements IServiceContract<Person> {
    add(data: Person): boolean {
        var exists = false
        if (people.length > 0) {
            for (const element of people) {
                if (element.id === data.id) {
                    exists = true
                    break
                }
            }
        }

        if (!exists) {
            people.push(data)
            return true
        } else
            throw new Error(`person with id ${data.id} already exists`)
    }
    getAll(): readonly Person[] {
        return people
    }
    getById(id: number): Person | null {
        var found: Person | null = null
        if (people.length > 0) {
            for (const element of people) {
                if (element.id === id) {
                    found = element
                    break
                }
            }
        }
        return found
    }

}