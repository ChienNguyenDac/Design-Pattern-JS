import { expect } from "chai"
import E_Banking from "../src/sructural/facade.js"

describe('Facade Pattern Test', ()=>{
    it('testcase 1', ()=>{
        const myAccount = new E_Banking('78159', 1000, 'OCB')
        const result = myAccount.checkout(500)
        expect(myAccount.balance).to.equal(500)
        expect(result).to.equal('success')
    })
})