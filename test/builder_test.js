import { expect } from "chai"
import HouseBuilder from "../src/creational/builder.js"

describe('Builder Pattern test', ()=>{
    it('Create house with 2 floor, 6 room, 15 door', ()=>{
        const builder = new HouseBuilder()
        const myHouse = builder.buildFloor(2).buildRoom(6).buildDoor(15)
        expect(myHouse.getInfo()).to.deep.equal({
            floor:2,
            room: 6,
            door: 15
        })
    })
})

