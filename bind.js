let person = {
    name: 'Ibrah Karis',
    getName: function() {
        console.log(this.name);
    }
};
let j= person.getName.bind(person)
setTimeout(j, 1000);

A013986148K
IxVKgjH1