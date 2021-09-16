/**
 * Factory Pattern : create other objects
 */

class Student{
    constructor(name, age, className){
        this.name = name
        this.age = age
        this.className = className
    }
}

class StudentFactory{
    static create(name){
        return new Student(name) // age & className are undefined
    }
}

export default StudentFactory