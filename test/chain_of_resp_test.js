import { expect } from "chai"
import main from "../src/behavioral/chain_of_resp.js"

describe('Chain of responsibility Pattern Test', ()=>{
    it('testcase1', ()=>{
        const myProgram = new main()
        expect(myProgram.run()[1]).to.equal('middleware 1')
        expect(myProgram.run()[2]).to.equal('middleware 2')
    })
})