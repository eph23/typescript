let ages: number[] = [100, 101, 102];
ages.push(66);

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

let person1: Person = {
    name: "Joe",
    age: 24,
    isStudent: true,
};
let person2: Person = {
    name: "Jake",
    age: 64,
    isStudent: false,
};

let people: Person[] = [person1, person2];
