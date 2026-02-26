var david = {
   first_name: "David", 
   last_name: "Durr"
};

var student1 = {
   id: "u12131",
   courses: ["Programming I", "English II", "Algebra"],
   advised: false
};

console.log(david.last_name); // displays "Durr"
// console.log(typeof david.last_name);
console.log(student1["id"]); // displays "u12131"
console.log(student1.courses[1]); // displays "English II"
student1.advised = true;
david.age = 50;
// console.log(typeof david.age);
function Person(first, middle, last) {
   this.first = first;
   this.middle = middle;
   this.last = last;
   this.initials = initials;
}

// console.log(typeof Person);
function initials() {
   return this.first[0] + this.middle[0] + this.last[0];
}

var aPerson = new Person("John","Quincy","Public");
// console.log(typeof aPerson);
console.log("First name: " + aPerson.first);
console.log("Middle name: " + aPerson.middle);
console.log("Last name: " + aPerson.last);
console.log("Initials: " + aPerson.initials());
