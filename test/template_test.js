import { expect } from "chai"
import { Bakery_BaoThanh, Bakery_DongTam } from "../src/behavioral/template.js"

describe('Template Pattern Test', ()=>{
    it('testcase 1', ()=>{
        const flourWeight = 50
        const bakery1 = new Bakery_BaoThanh()
        const bakery2 = new Bakery_DongTam()

        const cakeNumber1 = bakery1.make(flourWeight)
        const cakeNumber2 = bakery2.make(flourWeight)

        expect(cakeNumber1 > cakeNumber2).to.be.true
        expect(bakery1.make(500)).to.equal(bakery2.make(500))
    })
})