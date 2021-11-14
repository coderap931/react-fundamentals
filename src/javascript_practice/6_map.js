const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomolgy'},
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Exact same thing, different param name
const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

// Practice
const instructorInfo = instructors.map(i => {
    let instructor = (`${i.name}: ${i.specialty}`);
    console.log(instructor);
});