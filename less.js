let marks = [ 4, 5, 7, 9, 10, 3 ];
let lessThan=marks.some(e => e<5)
console.log(lessThan)

const cssClasses = ['btn', 'btn-primary', 'btn-active'];
const btnClass = cssClasses.join(" ");

console.log(btnClass);

const title = 'JavaScript array join example';
const url = title.split(' ')
    .join('-')
    .toLowerCase();

console.log(url);



let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];
console.table(activities)

activities.push(['study', 2])
console.table(activities)

activities.forEach(activity => {
    let percentage= ((activity[1] / 24)*100).toFixed()
    activity['percentage']=percentage + "%"
});

console.table(activities)