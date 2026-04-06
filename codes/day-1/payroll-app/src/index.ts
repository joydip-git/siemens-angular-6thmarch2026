import { Person } from "./models/person";
import { Trainee } from "./models/trainee";
import { Trainer } from "./models/trainer";
import { PeopleService } from "./services/people-service";
import { IServiceContract } from "./services/service-contract";

try {
    var anilTrainer = new Trainer(100, "anil", 1000, "JavaScript")
    var sunilTrainee = new Trainee(101, "sunil", 2000, "HR")

    var service: IServiceContract<Person> = new PeopleService();
    console.log(service.add(anilTrainer) ? 'added' : 'failed to add');
    console.log(service.add(sunilTrainee) ? 'added' : 'failed to add');

    var allPeople: readonly Person[] = service.getAll();
    for (var index = 0; index < allPeople.length; index++) {
        const element = allPeople[index];
        console.log(element.print());
    }
    console.log('\n\n');
    for (const index in allPeople) {
        const element = allPeople[index];
        console.log(element.print());
    }
    console.log('\n\n');
    for (const element of allPeople) {
        console.log(element.print());
    }

    var found: Person | null = service.getById(100)
    console.log(found?.name);
} catch (error: any) {
    console.log(error.message);
}