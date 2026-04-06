var anilTrainer = new Trainer(100, "anil", 1000, "JavaScript")
var sunilTrainee = new Trainee(101, "sunil", 2000, "HR")

var people = [anilTrainer, sunilTrainee];

for (var index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element.print());
}
console.log('\n\n');
for (const index in people) {   
    const element = people[index];
    console.log(element.print());
}
console.log('\n\n');
for (const element of people) {
    console.log(element.print());
}