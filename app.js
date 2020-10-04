var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var //person: {
//     name:string;
//     age: number;
// }
person = {
    name: 'Gurcan',
    age: 45,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.ADMIN) {
    console.log('admin');
}
