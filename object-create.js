const person = {
  Name: 'Md. Osman Goni',
  Age: 23,
  Hobbies: ['reading', 'praying', 'learning'],

  greet: function() {
    console.log("Hello Everyone");
  },
  score: {
    Math: 99,
    CP: 88
  }

}

console.log(person.Name);
console.log(person.Age);
console.log(person.Hobbies);
person.greet();
console.log(person.score.Math);

const Employee = new Object ({
  EmpName: 'Md. Osman',
  Position: 'Software Engineer',
  Salary: 5555555,
  work: function() {
    console.log('Hard Working Employee');
  },
  Skill: {
    HTML: '90%',
    CSS: '80%',
    JS: '85%',
    CSharp: "70%"
  }
});

console.log(Employee.EmpName);
console.log(Employee.Position);
console.log(Employee.Salary);
console.log(Employee.Skill.CSharp)
Employee.work();