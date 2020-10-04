enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'Gurcan',
  age: 45,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
  console.log('admin');
}
