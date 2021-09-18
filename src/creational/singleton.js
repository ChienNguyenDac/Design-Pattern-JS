/**
 * The Singleton Pattern limits the number of instances of 
 * a particular object to just one. This single instance is called the singleton.
 * All object is create by Singleton Pattern, this clone from only object => same
 */

export default class Todos{
    constructor(){
        this.todolist = []
        if( typeof Todos.instance === 'object')
            return Todos.instance
        Todos.instance = this
        return this
    }
    addItem(item){
        this.todolist.push(item)
    }
}