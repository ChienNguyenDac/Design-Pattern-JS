import { expect } from "chai"
import VehicleFactory from "../src/creational/abtract_factory.js"

describe('Abtract Factory Pattern test', ()=>{
    it('Create new car', ()=>{
        const pattern = {
            type: 'car',
            name: 'Huyndai',
            color: 'red'
        }
        const car = VehicleFactory(pattern)
        expect(car.getInfo()).to.equal('This is a Car')
    })
    it('Create new motor', ()=>{
        const pattern = {
            type: 'motor',
            name: 'Hondo',
            color: 'green'
        }
        const motor = VehicleFactory(pattern)
        expect(motor.getInfo()).to.equal('This is a Motor')
    })
})