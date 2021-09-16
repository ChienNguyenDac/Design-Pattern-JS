// class Shipping{
//     request(zipStart, zipEnd, weight){
//         //  Some thing do
//         return '50$'
//     }
// }

// class AdvanceShipping{
//     login(cretentials){
//         // Do something
//     }   
//     setStart(start){

//     }
//     setDestination(destination){

//     }
//     calculate(weight){
//         return '10$'
//     }
// }

// class ShippingAdapter{
//     constructor(cretentials){
//         this.shipping = new AdvanceShipping()
//         this.shipping.login(cretentials)
//     }

//     request(zipStart, zipEnd, weight){
//         this.shipping.setStart(zipStart)
//         this.shipping.setDestination(zipEnd)
//         return this.shipping.calculate(weight)
//     }
// }

// function run(){
//     let shipping = new Shipping()
//     let cretentials = { token : '123456' }
//     let adapter = new ShippingAdapter(cretentials)

//     let cost = shipping.request('0000','0001', '5kg')
//     console.log(cost)

//     cost = adapter.request('0000', '0001', '5kg')
//     console.log(cost)
// }

// run()

import{ expect } from 'chai'
import StudentFactory from '../src/creational/factory.js'

describe('Factory Pattern test', () => {
    it('Create new student name Chien', ()=>{
        const student = StudentFactory.create('Chien')
        expect(student.name).to.equal('Chien')
    })
    it('Create new student name John', ()=>{
        const student = StudentFactory.create('John')
        expect(student.name).to.equal('John')
    })
})

