function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function() {
            return this.firstName + " " + this.lastName
        },
        greet: function(person) {
            console.log("Hello, " + person.getFullName() +
                  ". I'm " + this.getFullName());
        }
    };
}

var johnDoe = createPerson("John", "Doe");
var janeDoe = createPerson("Jane", "Doe");

johnDoe.greet(janeDoe);
