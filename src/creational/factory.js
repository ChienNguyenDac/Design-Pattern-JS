/**
 * Program Factory : create other objects
 */

class Student{
    constructor(name, age, className){
        this.name = name
        this.age = age
        this.className = className
    }
}

class StudentFactory{
    create(name){
        return new Student(name) // age & className are undefined
    }
}

function run(){
    const studentFactory = new StudentFactory()
    const firstStudent = studentFactory.create('chien')
    const secondStudent = studentFactory.create('john')

    console.log('First student', firstStudent)
    console.log('Second student', secondStudent)
}
run()