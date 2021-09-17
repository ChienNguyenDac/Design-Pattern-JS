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

describe('Method Factory Pattern test', () => {
    it('Create primary school student name Chien', ()=>{
        const student = StudentFactory.create(8, 'Chien')
        expect(student.school).to.equal('primary school')
    })
    it('Create high school student', ()=>{
        const student = StudentFactory.create(17)
        expect(student.school).to.equal('high school')
    })
})

