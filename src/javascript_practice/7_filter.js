// Without filter
const instructors = [
    {name: 'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomolgy', medals: 4},
];

let instructor_names = [];

for(i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);

// With filter
const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

// Exact same thing, different parameter name
const instructorNamesTwo = instructors.filter(i => i.medals >= 5);
console.log(instructorNames);

// Practice
const instructorInfo = instructors.filter(instructors => instructors.name == 'Kenn');
console.log(instructorInfo);