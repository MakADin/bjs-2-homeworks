function Student(name, gender, age) {
  (this.name = name),
    (this.gender = gender),
    (this.age = age),
    (this.marks = []);
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if (!this.hasOwnProperty("marks")) {
    return 0;
  }
  this.marks.push(...marks);
};

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks")) {
    return 0;
  }
  return this.marks.reduce(
    (accum, value, index, array) => accum + value / array.length,
    0
  );
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  return this.excluded = reason;
};

// let student = new Student("Василиса", "женский", 19);
// console.log(student);
// student.setSubject("Физкультура");
// console.log(student.subject);
// student.addMarks(5);
// console.log(student.marks);
// student.exclude('прогулы');
// console.log(student.exclude);
// console.log(`Студент "${student.name}" отчислен по причине: ${student.excluded}`);

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}