let person = {
    name: 'Ibrah Karis',
    getName: function() {
        console.log(this.name);
    }
};
let j= person.getName.bind(person)
setTimeout(j, 1000);