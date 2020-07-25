class Person{
    constructor(name,age){
        this.name =name;
        this.age = age;
    }
    start(){
        console.log('Teacher  ${this.name} is ${this.age} old');
    }
    
}
var lec = new Person("kariuki",38);
console.log("Teacher "+ lec.name,+ "is "+ tostring(lec.age) +"old");
//lec.start();
