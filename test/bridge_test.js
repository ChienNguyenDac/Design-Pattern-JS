import { expect } from "chai"
import { Dell, Corei3 } from "../src/sructural/bridge.js"

describe('Bridge Pattern test', ()=>{
    it('Testcase 1', ()=>{
        const core = new Corei3()
        const dell = new Dell(core)
        expect(core.getPrice()).to.equal(200)
        expect(dell.getPrice()).to.equal(700)
    })
})