import { expect } from "chai"
import Todos from "../src/creational/singleton.js"

describe('Single Pattern test', ()=>{
    it('add item', ()=>{
        const todo1 = new Todos()
        const todo2 = new Todos()
        todo1.addItem('Go to school')
        expect(todo2.todolist).to.deep.equal(['Go to school'])
        expect(todo1===todo2).to.be.true
    })
})