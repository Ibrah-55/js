const computer = { 
    name: 'Macbook',
    isOn: false,
    turnOn(){
        this.isOn = true;
        return `The ${this.name} is on`
    },
    turnOff(){
        this.isOn = false;
        retun `The ${this.name} is turned off`

    }
};
const server={
    name: 'The Microsoft Edge server 2010',
    isOn: false,
}
let working=computer.turnOn.apply(server)
let result=computer.turnOff.apply(server)
console.log(working)
console.log(result)