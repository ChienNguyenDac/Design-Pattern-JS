/**
 * Factory Pattern : create other objects with type
 */

class Student{
    constructor(name, age, school){
        this.name = name
        this.age = age
        this.school = school
    }
}

class StudentFactory{
    static create(age, name){
        if( age>=7 && age<12)
            return new Student(name, age, 'primary school')
        else if( age>=12 && age<16)
            return new Student(name, age, 'junior high school')
        else if ( age>=16 && age<19 )
            return new Student(name, age, 'high school')
        else
            throw 'This is not Student.'
    }
}

export default StudentFactory