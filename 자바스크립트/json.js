// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify
console.log(JSON.stringify({ x: 5 }));

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit =  {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${name} jumps!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(key, value);
    return key === 'name' ? 'kim' : value;
});
console.log(json);

// 2. JSON to Object
// parse
// console.clear();
json = JSON.stringify(rabbit);
console.log(JSON.parse(json));

const obj = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());