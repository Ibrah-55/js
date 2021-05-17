const behavior = {
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

var createPerson = (firstName, lastName) => {
    let person=Object.create(behavior);
    person.firstName = firstName;
    person.lastName = lastName;
    return person;

}
let john = createPerson('John', 'Doe'),
    jane = createPerson('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());