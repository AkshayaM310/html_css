/*
let object_name{
    key:value
    key:value
}
    accesing==>
        objectname.key


*/

let user={
    name: "john",
    age: 20,
};

console.log(Object.keys(user));
console.log(user);

user.city="delhi";
console.log(user);

delete user.age;
console.log(user);
