let group={
    title:"This group",
    students:["John", "Peter", "Eric"],

    showList(){
        this.students.forEach(
            students => console.log(this.title + ':' + students)
        );
    }
};
group.showList();