import { expect } from "chai"
import { Fan, Remote, ChangeSpeedCommand, TurnOffCommand, TurnOnCommand } from "../src/behavioral/command.js"

describe('Command Pattern Test', ()=>{
    it('testcase 1', ()=>{
        const fan = new Fan()
        const remote = new Remote(new TurnOnCommand(fan))
        remote.run()
        expect(fan.speed).to.equal(1)
        remote.setCommand(new TurnOffCommand(fan))
        remote.run()
        expect(fan.speed).to.equal(0)
        expect(fan.lastSpeed).to.equal(1)
    })
})