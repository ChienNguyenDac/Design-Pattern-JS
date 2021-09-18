import { expect } from "chai"
import { Phone, ModernPhone } from "../src/sructural/adapter.js"

describe('Adapter Pattern test', () => {
    it('', ()=>{
        const featureOldPhone = Object.getOwnPropertyNames(Phone.prototype)
        const featureNewPhone = Object.getOwnPropertyNames(ModernPhone.prototype)

        expect(featureOldPhone.indexOf('play')).to.equal(-1)
        expect(featureNewPhone.indexOf('play')!==-1).to.be.true
    })
})

